<script lang="js">
import "@/libraries/p5.min.js";
import "@/libraries/p5.sound.min.js";
import "@/libraries/p5.svg.js";
import { onBeforeMount, onMounted, onUnmounted, ref } from "vue";
import insidePathURL0 from "@/assets/logos/Logo0Inner.svg?raw";
import outsidePathURL0 from "@/assets/logos/Logo0Outer.svg?raw";
import insidePathURL1 from "@/assets/logos/Logo1Inner.svg?raw";
import outsidePathURL1 from "@/assets/logos/Logo1Outer.svg?raw";
import insidePathURL2 from "@/assets/logos/Logo2Inner.svg?raw";
import outsidePathURL2 from "@/assets/logos/Logo2Outer.svg?raw";
import insidePathURL3 from "@/assets/logos/Logo3Inner.svg?raw";
import outsidePathURL3 from "@/assets/logos/Logo3Outer.svg?raw";
import insidePathURL4 from "@/assets/logos/Logo4Inner.svg?raw";
import outsidePathURL4 from "@/assets/logos/Logo4Outer.svg?raw";
import insidePathURL5 from "@/assets/logos/Logo5Inner.svg?raw";
import outsidePathURL5 from "@/assets/logos/Logo5Outer.svg?raw";
import paper from "paper";
import { usePaperStore } from "@/stores/paper";
import { Color, CompoundPath, Point, PointText } from "paper/dist/paper-core";
import { PitchDetector } from "pitchy";
import { notes } from "@/misc/notes";

export default {
  name: "oOoLogo",
  props: {},
  setup(props) {
    const paperStore = usePaperStore();

    const containerName = ref(
      "container" + Math.ceil(Math.random() * 100).toString()
    );

    let scope = new paper.PaperScope();
    paperStore.paperScopes.push(scope);
    let mic;
    let n;
    let detector;

    const neutralColor = "#FFF9F3";

    const colors = [
      "#F4364C",
      "#EF6A00",
      "#FFB500",
      "#00957A",
      "#00BCE1",
      "#0047BB",
      "#97409E",
      "#EF60A3",
    ];

    let properties = [
      {
        insidePath: insidePathURL0,
        outsidePath: outsidePathURL0,
        maxSizePercentage: 99,
        regularOctaveEnlargement: false,
        octaveEnlargementFactor: 1.2,
      },
      {
        insidePath: insidePathURL1,
        outsidePath: outsidePathURL1,
        maxSizePercentage: 95,
        regularOctaveEnlargement: false,
        octaveEnlargementFactor: 1.2,
      },
      {
        insidePath: insidePathURL2,
        outsidePath: outsidePathURL2,
        maxSizePercentage: 90,
        regularOctaveEnlargement: true,
        octaveEnlargementFactor: 1,
      },
      {
        insidePath: insidePathURL3,
        outsidePath: outsidePathURL3,
        maxSizePercentage: 95,
        regularOctaveEnlargement: true,
        octaveEnlargementFactor: 1,
      },
      {
        insidePath: insidePathURL4,
        outsidePath: outsidePathURL4,
        maxSizePercentage: 50,
        regularOctaveEnlargement: true,
        octaveEnlargementFactor: 1,
      },
      {
        insidePath: insidePathURL5,
        outsidePath: outsidePathURL5,
        maxSizePercentage: 95,
        regularOctaveEnlargement: true,
        octaveEnlargementFactor: 1,
      },
    ];

    onMounted(() => {
      const s = (p) => {
        let svg;

        function resizeFromContainer() {
          try {

          const size = p.createVector(
            myCanvas.parent().offsetWidth,
            myCanvas.parent().offsetHeight
          );
          if (size.x / size.y < 3.2) {
            size.y = size.x / 3.2;
          }
          scope.setup(size);
          p.resizeCanvas(size.x, size.y);
          } catch (error) {
            error;
          }
        }
        let myCanvas;

        let margin = 0;

        let newFillColor = p.color(neutralColor);

        let volume = 0;
        let octave = 0.8;
        let volumeLerp = volume;
        let octaveLerp = octave;
        let pitch = 0;
        let shapeIndex = 0;

        let foundOctaveValue = 5;

        let fillColor;

        let arrayLength = 5;
        let volumeArray = Array(arrayLength);
        let octaveArray = Array(arrayLength);
        let colorsArrayLength = 10;
        let colorArray = Array(0);

        let reverb;
        let amplitude;
        let fft;

        p.preload = function () {

          for(let n in colorsArrayLength){

            colorArray.unshift(newFillColor)
          }
          fillColor = newFillColor

          //newFillColor = p.color(neutralColor);
          //getShape();
        };

        function getShape() {
          // o_shape = p.loadSVG(imageURL, () => {
          //   ratioWtoH =
          //     o_shape.elt.viewBox.baseVal.width /
          //     o_shape.elt.viewBox.baseVal.height;
          // });

          let maxHeight = p.height - p.height / 20;

          if (scope) {
            scope.activate();
          }

          try {
            for (let i of [-1, 0, 1]) {
              let outsideImportedShape = scope.project.importSVG(
                properties[shapeIndex].outsidePath,
                {
                  insert: false,
                }
              );
              let insideImportedShape = scope.project.importSVG(
                properties[shapeIndex].insidePath,
                {
                  insert: false,
                }
              );

              let currentVolume =
                volumeArray[Math.abs(i * (volumeArray.length - 1))];
              let centerScale = i == 0 ? p.map(currentVolume, 0, 1, 1.6, 1) : 1;
              let notCenterSpacingScale =
                i == 0 ? 1 : p.map(currentVolume, 0, 1, 1.6, 1);

              let outerHeight =
                (maxHeight / 3 + ((maxHeight )* 2 / 3) * currentVolume) *
                centerScale;
              let outerWidth =
                (outsideImportedShape.bounds.size.width /
                  outsideImportedShape.bounds.size.height) *
                outerHeight;
              let innerHeight =
                (outerHeight * properties[shapeIndex].maxSizePercentage) / 100;
              let innerWidth =
                (insideImportedShape.bounds.size.width /
                  insideImportedShape.bounds.size.height) *
                innerHeight;
              let innerScale =
                octaveArray[Math.abs(i * (octaveArray.length - 1))];

              margin = outerHeight / 10;

              outsideImportedShape.bounds = new scope.Rectangle(
                new scope.Point(0, 0),
                new scope.Size(outerWidth, outerHeight)
              );
              outsideImportedShape.setPosition(
                scope.view.size.width / 2 +
                  ((outerWidth / 2) * notCenterSpacingScale +
                    outerWidth / 2 +
                    margin) *
                    i,
                scope.view.size.height - outerHeight / 2
              );

              let octaveEnlargementFactor = 1;
              if (!properties[shapeIndex].regularOctaveEnlargement) {
                octaveEnlargementFactor =
                  properties[shapeIndex].octaveEnlargementFactor * innerScale;
              }

              insideImportedShape.bounds = new scope.Rectangle(
                new scope.Point(0, 0),
                new scope.Size(
                  innerWidth * innerScale * octaveEnlargementFactor,
                  innerHeight * innerScale
                )
              );
              insideImportedShape.setPosition(
                scope.view.size.width / 2 +
                  ((outerWidth / 2) * notCenterSpacingScale +
                    outerWidth / 2 +
                    margin) *
                    i,
                scope.view.size.height - outerHeight / 2
              );

              let ciao2 = new scope.CompoundPath({
                children: [
                  outsideImportedShape
                    .getItems()[1]
                    .subtract(insideImportedShape.getItems()[1]),
                ],
                fillColor: new Color(
                  p.map(fillColor.levels[0], 0, 255, 0, 1),
                  p.map(fillColor.levels[1], 0, 255, 0, 1),
                  p.map(fillColor.levels[2], 0, 255, 0, 1)
                ),
              });
            }

            // let background = new scope.Path.Rectangle(scope.view.size);
            // background.fillColor = new scope.Color(
            //   p.random(0),
            //   p.random(0),
            //   p.random(0)
            // );
            // background.sendToBack();

            // console.log(p.sin(p.frameCount/1000)*100,);

            svg = scope.project.exportSVG({ asString: false });
            scope.project.clear();
          } catch (error) {
            console.log(error);
          }
        }

        p.setup = function () {
          myCanvas = p.createCanvas(0, 0, p.SVG);

          let size = new scope.Size(50, 50);
          scope.setup(size);

          resizeFromContainer();

          p.smooth(8);
          p.imageMode(p.CENTER);
          p.frameRate(60);

          mic = new p5.AudioIn();
          mic.start();

          // let reverb = new p5.Reverb();
          // reverb.process(mic, 5, 1);
          // reverb.drywet(1);

          //reverb.connect();

          fft = new p5.FFT(0.0, 1024);
          fft.setInput(mic);

          //console.log(p.getAudioContext().sampleRate);

          detector = PitchDetector.forNumberArray(1024);
          //mic.connect();
        };

        p.touchStarted = function () {
          p.getAudioContext().resume();
        };

        p.draw = function () {
          myCanvas.drawingContext.__clearCanvas();
          // p.clear();

          let isSinging = false;

          let [pitchFound, clarity] = detector.findPitch(
            fft.waveform(),
            p.getAudioContext().sampleRate
          );

          // pitchFound = p.map(p.mouseX, 0, p.width, 16.35, 7902.13);
          // clarity = 1;

          volume = p.map(mic.getLevel(), 0, 0.4, 0, 1);
          // volume = p.map(p.mouseY, 0, p.height, 1, 0);
          volume = p.constrain(volume, 0, 1);


          if (clarity > 0.6 && volume > 0.05) {
            isSinging = true;
          } else {
            isSinging = false;
          }


          if (isSinging) {
            let noteIndex = notes.findIndex((note, index) => {
              return note.Frequency > pitchFound;
            });

            if (noteIndex) {
              foundOctaveValue = Math.floor(noteIndex / 8);
              pitch = noteIndex % 8;

              newFillColor = p.color(colors.at(pitch));
            }

            octave = p.map(foundOctaveValue, 1, 6, 0, 1);
            octave = p.constrain(octave, 0, 1);

          } else {
            newFillColor = p.color(neutralColor);
            volume = 0;
            octave = 0.8;
          }
          colorArray.unshift(newFillColor);
          if (colorArray.length > colorsArrayLength) {
            colorArray.pop();
          }

          const newColor = { red: 0, green: 0, blue: 0 };

          colorArray.forEach((color) => {
            newColor.red += p.red(color);
            newColor.green += p.green(color);
            newColor.blue += p.blue(color);
          });
          newColor.red = newColor.red / colorArray.length;
          newColor.green = newColor.green / colorArray.length;
          newColor.blue = newColor.blue / colorArray.length;

          fillColor = p.color(newColor.red, newColor.green, newColor.blue);

          volumeLerp = p.lerp(volumeLerp, volume, 0.1);
            volumeArray.unshift(volumeLerp);
            if (volumeArray.length > arrayLength) {
              volumeArray.pop();
            }
            octaveLerp = p.lerp(octaveLerp, octave, 0.1);
            octaveArray.unshift(octaveLerp);
            if (octaveArray.length > arrayLength) {
              octaveArray.pop();
            }



          getShape();

          // p.image(o_shape, p.width / 2, p.height / 2 / 2, 100 * ratioWtoH, 100);
          p.image(svg, p.width / 2, p.height / 2, p.width, p.height);
          // p.image(svg, p.width / 2, p.height / 2 / 2, 280 * ratioWtoH, 280);
        };

        p.windowResized = function () {
          resizeFromContainer();
        };
      };

      n = new p5(s, containerName.value);
    });

    onUnmounted(() => {
      paperStore.paperScopes = [];
      scope.project.remove();
      scope.remove();
      scope = null;

      if (mic) {
        mic.stop();
      }

      n.noLoop();
    });

    return { containerName };
  },
};
</script>

<template>
  <div
    :id="containerName"
    style="width: 100%; height: 100%; line-height: 0px"
    class="flex justify-center"
  ></div>
</template>
