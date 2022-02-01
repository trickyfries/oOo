function resizeFromContainer() {
  let container = select('#myContainer');
  size = createVector(container.width, container.height);
  resizeCanvas(size.x, size.y);
}

let centerWaveMode = false;
let noColor = false;
let blackBG = false;
let hideText = false;



let myCanvas;


let o_shape;
let next_o_shape;
let ratioWtoH = 1;
let next_ratioWtoH = 1;

let baseSize = 150;
let smallBaseSize = 100;
let margin = 10;



const circles = 3;
let sizes = new Array(circles);
let sizesLerped = new Array(circles);

const volumeGraphLength = 20;

let volumeGraph = new Array(volumeGraphLength);

let some_color;

let mic;
let riverb;



function preload() {
  getShape();
}

function getShape() {
  let oNumber = ceil(random(0, 14));

  if (next_o_shape) {
    o_shape = next_o_shape;
    ratioWtoH = o_shape.elt.viewBox.baseVal.width / o_shape.elt.viewBox.baseVal.height;
  } else {
    o_shape = loadSVG("assets/Asset" + str(oNumber) + ".svg", () => {
      ratioWtoH = o_shape.elt.viewBox.baseVal.width / o_shape.elt.viewBox.baseVal.height;
    }
    );
  }

  oNumber = ceil(random(0, 14));

  next_o_shape = loadSVG("assets/Asset" + str(oNumber) + ".svg", () => {
  }
  );

  some_color = color(random(0, 255), random(0, 255), random(0, 255));
  //some_color = color(0);

  //
}

function keyPressed() {
  if (key == ' ') {
    getShape();
  }

  if (key == 'c' || key == 'C') {
    centerWaveMode = !centerWaveMode;
  }

  if (key == 'k' || key == 'K') {
    noColor = !noColor;
  }

  if (key == 'b' || key == 'B') {
    blackBG = !blackBG;
  }

  if (key == 'h' || key == 'H') {
    hideText = !hideText;
  }
}

function setup() {
  myCanvas = createCanvas(0, 0, SVG);
  myCanvas.parent('myContainer');
  resizeFromContainer();

  smooth();
  imageMode(CENTER);
  frameRate(60);

  mic = new p5.AudioIn();
  mic.start();

  reverb = new p5.Reverb();
  reverb.process(mic, 5, 1);
  reverb.drywet(1);
  mic.disconnect();


  //amplitude = new p5.Amplitude();
  //amplitude.setInput(mic);

  //mic.connect();
  //reverb.connect();
}

function touchStarted() {
  getAudioContext().resume();
}

function draw() {
  if (o_shape) {
    myCanvas.drawingContext.__clearCanvas();
    clear();
  }

  if (blackBG) {
    background(0);
  }


  textAlign(CENTER);
  textSize(20);
  if (!noColor) {
    fill(color(red(some_color) / 1.3, green(some_color) / 1.3, blue(some_color) / 1.3));
  } else {
    if (blackBG) {
      fill(color(255));
    } else {
      fill(color(0));
    }
  }

  if (!hideText) {

    text("SPAZIO per cambiare forma e colore. K per disattivare il colore del logo. B per sfondo nero.", width / 2, height - 80);


    let currentMode = centerWaveMode ? "Dal Centro" : "Da Sinistra";
    text("H per nascondere il testo. C per cambiare tipo di onda. Modalità attuale: " + currentMode, width / 2, height - 50);

    if (getAudioContext().state != "running") {
      text("Dare accesso al microfono e premere sul logo e  per iniziare", width / 2, height / 2 + smallBaseSize - 50);
    }
  }


  reverb.drywet(map(mouseX, 0, width, 0, 1));

  //console.log(mic.getLevel());

  let volume = mic.getLevel();

  for (let i = volumeGraphLength; i > 0; i--) {
    volumeGraph[i] = volumeGraph[i - 1];
  }

  volumeGraph[0] = volume;





  if (centerWaveMode) {
    sizes[1] = map(volumeGraph[0], 0, 0.2, 1, 140);
    sizes[0] = map(volumeGraph[8], 0, 0.2, 1, 140);
    sizes[2] = map(volumeGraph[8], 0, 0.2, 1, 140);
  } else {
    sizes[1] = map(volumeGraph[5], 0, 0.2, 1, 140);
    sizes[0] = map(volumeGraph[0], 0, 0.2, 1, 140);
    sizes[2] = map(volumeGraph[10], 0, 0.2, 1, 140);
  }



  //sizes[1] = map(volumeGraph[10], 0, windowWidth, 0, 140);
  //sizes[0] = map(volumeGraph[0], 0, windowWidth, 0, 140);
  //sizes[2] = map(volumeGraph[20], 0, windowWidth, 0, 140);



  if (centerWaveMode) {
    sizes[1] = constrain(sizes[1], 0, 140) + baseSize;
  } else {
    sizes[1] = constrain(sizes[1], 0, 140) + smallBaseSize;
  }
  sizes[0] = constrain(sizes[0], 0, 140) + smallBaseSize;
  sizes[2] = constrain(sizes[2], 0, 140) + smallBaseSize;

  for (let i = 0; i < circles; i++) {
    if (sizes[i] < smallBaseSize + 10) {
      sizes[i] = smallBaseSize;
    }

    sizesLerped[i] = lerp(sizesLerped[i], sizes[i], 0.2);
  }

  for (let i = 0; i < circles; i++) {
    if (Number.isNaN(sizes[i])) {
      sizes[i] = smallBaseSize;
    }
    if (Number.isNaN(sizesLerped[i])) {
      sizesLerped[i] = smallBaseSize;
    }
  }

  //tint(100, 10, 0);

  if (!noColor) {
    o_shape.attribute('fill', 'rgb(' + str(red(some_color)) + ',' + str(green(some_color)) + ',' + str(blue(some_color)) + ')');
  } else {
    if (blackBG) {
      o_shape.attribute('fill', 'rgb(' + str(255) + ',' + str(255) + ',' + str(255) + ')');
    } else {
      o_shape.attribute('fill', 'rgb(' + str(0) + ',' + str(0) + ',' + str(0) + ')');
    }
  }
  //o_shape.attribute('stroke', 'rgb(' +  str(red(some_color)) + ',' +str(green(some_color)) + ',' +str(blue(some_color)) + ')');
  //o_shape.attribute('stroke-width', '2');






  image(o_shape, width / 2,
    height / 2 - sizesLerped[1] / 2,
    sizesLerped[1] * ratioWtoH,
    sizesLerped[1]);


  image(o_shape, width / 2 - sizesLerped[0] / 2 * ratioWtoH - sizesLerped[1] / 2 * ratioWtoH - margin,
    height / 2 - sizesLerped[0] / 2,
    sizesLerped[0] * ratioWtoH,
    sizesLerped[0]);

  image(o_shape, width / 2 + sizesLerped[2] / 2 * ratioWtoH + sizesLerped[1] / 2 * ratioWtoH + margin,
    height / 2 - sizesLerped[2] / 2,
    sizesLerped[2] * ratioWtoH,
    sizesLerped[2]);



  if (!hideText) {

    image(o_shape, width / 2,
      80 - 200 / 2 / 4.0,
      200 * ratioWtoH / 4.0,
      200 / 4.0);


    image(o_shape, width / 2 - 120 / 2 * ratioWtoH / 4.0 - 200 / 2 * ratioWtoH / 4.0 - margin / 3.0,
      80 - 120 / 2 / 4.0,
      120 * ratioWtoH / 4.0,
      120 / 4.0);

    image(o_shape, width / 2 + 120 / 2 * ratioWtoH / 4.0 + 200 / 2 * ratioWtoH / 4.0 + margin / 3.0,
      80 - 120 / 2 / 4.0,
      120 * ratioWtoH / 4.0,
      120 / 4.0);
  }
}



function windowResized() {
  resizeFromContainer();
}
