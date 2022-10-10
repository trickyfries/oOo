<script setup lang="ts">
import oOoLogoVue from "@/components/oOoLogo.vue";
import NextPageIcon from "../components/Icons/NextPageIcon.vue";
import { useLightStore } from "@/stores/menuColor";
import { onMounted, ref } from "vue";
import PlayVideoIcon from "../components/Icons/PlayVideoIcon.vue";
import ColorIcon from "@/components/Icons/Dynamic/ColorIcon.vue";
import PesoIcon from "@/components/Icons/Dynamic/PesoIcon.vue";
import AltezzaIcon from "@/components/Icons/Dynamic/AltezzaIcon.vue";
import FormaIcon from "@/components/Icons/Dynamic/FormaIcon.vue";
import NotaIcon from "@/components/Icons/Dynamic/NotaIcon.vue";
import OttavaIcon from "@/components/Icons/Dynamic/OttavaIcon.vue";
import VolumeIcon from "@/components/Icons/Dynamic/VolumeIcon.vue";
import ContestoIcon from "@/components/Icons/Dynamic/ContestoIcon.vue";

const lightStore = useLightStore();

const videoIdent = ref(null);
const videoIdentOverlay = ref(null);

function playVideo() {
  if (videoIdent.value) {
    videoIdent.value.controls = true;
    videoIdentOverlay.value.style.display = "none";
    videoIdent.value.play();
  }
}

onMounted(() => {
  lightStore.light = true;
});
</script>

<template>
  <div class="pt-6 section lightMode overflow-hidden">
    <div class="container mx-auto lightMode">
      <div class="flex flex-col md:flex-row gap-0 items-center">
        <div
          class="flex justify-center w-full md:flex-1 relative h-80 md:h-[35rem] lg:h-[45rem] xl:w-[72rem] md:order-2"
        >
          <img
            class="absolute h-[20rem] object-cover md:h-auto md:w-[35rem] lg:w-[48rem] xl:w-[72rem] md:max-w-none md:translate-x-12 lg:translate-x-32 transition-all"
            src="@/assets/img/Pianista White.png"
            alt=""
          />
        </div>
        <div
          class="z-10 flex flex-col p-5 gap-4 md:gap-9 justify-center md:flex-1 md:w-4/5 md:order-1"
        >
          <h1>
            Il nuovo <br class="hidden md:block" />
            linguaggio
          </h1>
          <h6 class="mb-0">Uno sguardo proiettato verso il futuro.</h6>
          <p>
            Per un genere d’arte così completo e multidisciplinare nasce la
            necessità di un
            <strong>linguaggio forte, adattabile ed espressivo.</strong>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="lightMode md:h-20"></div>

  <div class="pt-6 section lightMode overflow-hidden">
    <div class="container mx-auto lightMode p-5">
      <h2 class="text-center">Testo di comunicazione</h2>
      <div class="flex justify-end">
        <div class="md:w-3/5 flex flex-col">
          <p class="large">
            L’opera è il momento in cui la potenza del teatro si incontra con il
            linguaggio universale della musica. La narrazione è accompagnata
            dalle arie e raccontata da artisti che, come noi, si immergono in
            una nuova dimensione, quella dello spettacolo.
          </p>
          <h6 class="large font-bold">
            Vivere l’opera vuol dire vivere se stessi, comprendere gli altri e
            la vita.
          </h6>
          <p class="large">
            Nata come genere di intrattenimento nelle corti italiane, l’opera
            lirica si è poi estesa a un pubblico più amplio riadattando di
            conseguenza il proprio linguaggio e la proria forma. Così come
            allora, oggi l’opera è vista come un genere elitario, non adatto ad
            un pubblico nuovo e moderno.
          </p>
          <p class="large">
            oOo vuole dare una nuova voce a questo mondo, aprire un dialogo tra
            professionisti, appassionati e nuovo pubblico. Con oOo l’opera
            diventa accessibile, digitale e interattiva.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="lightMode md:h-20"></div>

  <div class="relative section">
    <div class="">
      <h2 class="text-center lightMode">Video Ident</h2>
      <div class="container mx-auto">
        <div
          class="relative lg:w-3/4 mx-auto rounded-xl overflow-clip lightMode"
        >
          <video
            ref="videoIdent"
            controlslist=" nodownload"
            playsinline="true"
            loop="false"
            preload="auto"
            poster="@/assets/img/ident.png"
            src="@/assets/video/oOo_Video_Ident.mp4"
            class=""
          ></video>
          <div
            class="absolute top-0 left-0 w-full h-full flex cursor-pointer bg-white opacity-50"
            ref="videoIdentOverlay"
            @click="playVideo"
          >
            <PlayVideoIcon class="h-40 md:h-60 w-auto m-auto" />
          </div>
        </div>
      </div>
    </div>
    <div class="absolute top-1 w-full h-1/2 bg-white -z-10"></div>
  </div>

  <div class="md:h-20"></div>

  <div class="container mx-auto mb-10">
    <div class="lg:w-1/2 mx-auto text-center p-5">
      <h1 class="text-center mb-20">Il Logo</h1>
      <p>
        Il nome oOo è una parola onomatopeica, che prende ispirazione
        <strong>dai vocalizzi tipici dei cantanti d’opera.</strong> La lettura
        del naming invita l’utente a
        <strong>pronunciarlo cantando</strong> basandosi sulle altezze delle
        vocali.
      </p>
      <p>
        Il logo reagisce alla voce dell’utente, trasformandosi in base alle
        diverse componenti del suono.
      </p>
    </div>
  </div>

  <div class="container mx-auto section">
    <oOoLogoVue />
  </div>

  <div class="md:h-40"></div>

  <div class="container mx-auto mb-10">
    <div class="mx-auto text-center p-5">
      <h2 class="text-center mb-20">Parametri dinamici</h2>
      <div class="flex flex-col md:flex-row w-full gap-8">
        <div
          class="flex md:flex-col justify-between bg-blackLight rounded-xl p-8 lg:py-12 md:flex-1"
        >
          <div
            class="flex flex-col text-center font-medium items-center gap-2 flex-1"
          >
            <ColorIcon class="h-6 w-6 md:h-12 md:w-12" /><span
              class="md:text-2xl lg:text-4xl"
              >Colore</span
            >
          </div>
          <div class="flex-1 flex items-center justify-center">
            <div class="bg-white h-0.5 w-full md:h-16 md:w-1 mx-4 my-4"></div>
          </div>
          <div
            class="flex flex-col text-center font-medium items-center gap-2 flex-1"
          >
            <NotaIcon class="h-6 w-6 md:h-12 md:w-12" /><span
              class="md:text-2xl lg:text-4xl"
              >Nota</span
            >
          </div>
        </div>
        <div
          class="flex md:flex-col justify-between bg-blackLight rounded-xl p-8 lg:py-12 md:flex-1"
        >
          <div
            class="flex flex-col text-center font-medium items-center gap-2 flex-1"
          >
            <PesoIcon class="h-6 w-6 md:h-12 md:w-12" /><span
              class="md:text-2xl lg:text-4xl"
              >Peso</span
            >
          </div>
          <div class="flex-1 flex items-center justify-center">
            <div class="bg-white h-0.5 w-full md:h-16 md:w-1 mx-4 my-4"></div>
          </div>
          <div
            class="flex flex-col text-center font-medium items-center gap-2 flex-1"
          >
            <OttavaIcon class="h-6 w-6 md:h-12 md:w-12" /><span
              class="md:text-2xl lg:text-4xl"
              >Ottava</span
            >
          </div>
        </div>
        <div
          class="flex md:flex-col justify-between bg-blackLight rounded-xl p-8 lg:py-12 md:flex-1"
        >
          <div
            class="flex flex-col text-center font-medium items-center gap-2 flex-1"
          >
            <AltezzaIcon class="h-6 w-6 md:h-12 md:w-12" /><span
              class="md:text-2xl lg:text-4xl"
              >Altezza</span
            >
          </div>
          <div class="flex-1 flex items-center justify-center">
            <div class="bg-white h-0.5 w-full md:h-16 md:w-1 mx-4 my-4"></div>
          </div>
          <div
            class="flex flex-col text-center font-medium items-center gap-2 flex-1"
          >
            <VolumeIcon class="h-6 w-6 md:h-12 md:w-12" /><span
              class="md:text-2xl lg:text-4xl"
              >Volume</span
            >
          </div>
        </div>
        <div
          class="flex md:flex-col justify-between bg-blackLight rounded-xl p-8 lg:py-12 md:flex-1"
        >
          <div
            class="flex flex-col text-center font-medium items-center gap-2 flex-1"
          >
            <FormaIcon class="h-6 w-6 md:h-12 md:w-12" /><span
              class="md:text-2xl lg:text-4xl"
              >Forma</span
            >
          </div>
          <div class="flex-1 flex items-center justify-center">
            <div class="bg-white h-0.5 w-full md:h-16 md:w-1 mx-4 my-4"></div>
          </div>
          <div
            class="flex flex-col text-center font-medium items-center gap-2 flex-1"
          >
            <ContestoIcon class="h-6 w-6 md:h-12 md:w-12" /><span
              class="md:text-2xl lg:text-4xl"
              >Contesto</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto p-5">
    <div class="flex gap-9">
      <div class="hidden md:block md:flex-1 md:order-2">
        <img class="" src="@/assets/img/ooo-logo 1.png" alt="" />
      </div>
      <div
        class="text-center md:text-left md:flex-1 md:flex md:flex-col md:justify-center md:order-1"
      >
        <div class="flex items-center mb-5 md:mb-10 lg:mb-16 gap-3 md:gap-4">
          <ColorIcon class="h-9 w-9 md:h-24 md:w-24" />
          <h2 class="lg:text-7xl m-0">Colore</h2>
        </div>
        <img class="md:hidden mb-4" src="@/assets/img/ooo-logo 1.png" alt="" />
        <p class="lg:w-4/5">
          La <strong>frequenza sonora della nota</strong> prodotta dalla voce
          corrisponde a <strong>una specifica frequenza cromatica</strong> dello
          spettro visivo secondo la lunghezza d’onda.
        </p>
      </div>
    </div>
  </div>
  <div class="container mx-auto p-5">
    <div class="flex gap-9">
      <div class="hidden md:block md:flex-1 md:order-1">
        <img
          class=""
          src="@/assets/img/Logo Animation Dark-0001 copy.png"
          alt=""
        />
      </div>
      <div
        class="text-center md:text-left md:flex-1 md:flex md:flex-col md:justify-center md:order-2"
      >
        <div class="flex items-center mb-5 md:mb-10 lg:mb-16 gap-3 md:gap-4">
          <PesoIcon class="h-9 w-9 md:h-24 md:w-24" />
          <h2 class="lg:text-7xl m-0">Peso</h2>
        </div>
        <img
          class="md:hidden mb-4"
          src="@/assets/img/Logo Animation Dark-0001 copy.png"
          alt=""
        />
        <p class="lg:w-4/5">
          Più grave è la voce, <strong>maggiore sarà il peso d’asta</strong>. A
          suoni più acuti corrispondono invece
          <strong>pesi più leggeri.</strong>
        </p>
      </div>
    </div>
  </div>
  <div class="container mx-auto p-5">
    <div class="flex gap-9">
      <div class="hidden md:block md:flex-1 md:order-2">
        <img
          class=""
          src="@/assets/img/Logo Animation Dark-0002 copy.png"
          alt=""
        />
      </div>
      <div
        class="text-center md:text-left md:flex-1 md:flex md:flex-col md:justify-center md:order-1"
      >
        <div class="flex items-center mb-5 md:mb-10 lg:mb-16 gap-3 md:gap-4">
          <AltezzaIcon class="h-9 w-9 md:h-24 md:w-24" />
          <h2 class="lg:text-7xl m-0">Altezza</h2>
        </div>
        <img
          class="md:hidden mb-4"
          src="@/assets/img/Logo Animation Dark-0002 copy.png"
          alt=""
        />
        <p class="lg:w-4/5">
          <strong>Il volume della voce</strong> farà variare le altezze delle O
          <strong>cambiando gli equilibri</strong> all’interno della
          composizione del logo.
        </p>
      </div>
    </div>
  </div>
  <div class="container mx-auto p-5">
    <div class="flex gap-9">
      <div class="hidden md:block md:flex-1 md:order-1">
        <img
          class=""
          src="@/assets/img/oOo Logo Animation FINALE-0003 1.png"
          alt=""
        />
      </div>
      <div
        class="text-center md:text-left md:flex-1 md:flex md:flex-col md:justify-center md:order-2"
      >
        <div class="flex items-center mb-5 md:mb-10 lg:mb-16 gap-3 md:gap-4">
          <FormaIcon class="h-9 w-9 md:h-24 md:w-24" />
          <h2 class="lg:text-7xl m-0">Forma</h2>
        </div>
        <img
          class="md:hidden mb-4"
          src="@/assets/img/oOo Logo Animation FINALE-0003 1.png"
          alt=""
        />
        <p class="lg:w-4/5">
          A seconda del contesto in cui il logo è utilizzato le O
          <strong>assumeranno la forma che meglio rappresenta</strong>
          l’argomento in questione.
        </p>
      </div>
    </div>
  </div>

  <div class="md:h-20"></div>

  <div class="container mx-auto mb-10">
    <div class="mx-auto text-center p-5">
      <h2 class="text-center">Palette</h2>
      <div class="flex flex-col md:hidden gap-5">
        <img class="" src="@/assets/img/Palette 1.png" alt="" />
        <img class="" src="@/assets/img/Palette 2.png" alt="" />
        <img class="" src="@/assets/img/Palette 3.png" alt="" />
      </div>

      <img class="hidden md:block" src="@/assets/img/Palette.png" alt="" />
    </div>
  </div>

  <div class="h-20"></div>
  <div class="h-20 lightMode"></div>

  <div class="section lightMode">
    <div class="container mx-auto p-5">
      <h1 class="mb-7">Roxborough CF</h1>
      <div class="flex justify-end">
        <div class="w-4/5 flex flex-col">
          <h2>Uno stile classico e raffinato di rimando alla tradizione</h2>
          <h2>
            <span class="font-medium">Medium</span><br /><span class="font-bold"
              >Bold</span
            ><br /><span class="font-extrabold">ExtraBold</span><br /><span
              class="font-black"
              >Heavy</span
            >
          </h2>
        </div>
      </div>
    </div>
    <div class="container mx-auto p-5">
      <h1 class="mb-7 font-sans font-medium">Neue Haas Grotesk</h1>
      <div class="flex justify-end">
        <div class="w-4/5 flex flex-col">
          <h2 class="font-sans font-medium">
            Rigore e leggibilità in un mondo moderno
          </h2>
          <h2 class="font-sans">
            <span class="font-normal">Regular</span><br /><span
              class="font-medium"
              >Medium</span
            ><br /><span class="font-bold">Bold</span><br /><span
              class="font-black"
              >Black</span
            >
          </h2>
        </div>
      </div>
    </div>
  </div>

  <div class="section lightMode">
    <div class="container mx-auto p-5">
      <h2 class="text-center lg:text-8xl">La nuova comunicazione</h2>
      <img
        class="rounded-lg"
        src="@/assets/img/DoppiaPagina_A3_09_22-compressed.png"
        alt=""
      />
    </div>
  </div>

  <div class="lightMode">
    <div class="container mx-auto p-5">
      <div class="flex gap-9">
        <div class="hidden md:block md:flex-1">
          <img class="" src="@/assets/img/collage-foto.png" alt="" />
        </div>
        <div
          class="text-center md:text-left md:flex-1 md:flex md:flex-col md:justify-center"
        >
          <h2 class="lg:text-7xl mb-5 md:mb-10 lg:mb-16">Stile visivo</h2>
          <img class="md:hidden" src="@/assets/img/collage-foto.png" alt="" />
          <h6 class="md:mb-2 lg:mb-8">Una storia da raccontare.</h6>
          <p class="lg:w-4/5">
            La tecnica scelta rappresenta al meglio il connubio tra
            l’innovazione e la tradizione, impiegando
            <strong
              >tecniche materiche quali il collage e il retino
              tipografico</strong
            >
            accostate a <strong>elementi grafici</strong> derivanti da una
            semplificazione delle forme variabili del logo.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="section lightMode">
    <div class="container mx-auto p-5">
      <img class="" src="@/assets/img/collage-loghi.png" alt="" />
    </div>
  </div>

  <div class="md:h-20 lightMode"></div>
  <router-link :to="{ name: 'digitale' }">
    <div class="bg-teal py-20 md:py-24">
      <div class="container-fluid mx-auto">
        <div class="flex text-center justify-center items-center gap-2">
          <h2 class="m-0">oOo nel digitale</h2>
          <NextPageIcon class="h-8 w-8 sm:h-12 sm:w-12 md:h-20 md:w-20" />
        </div>
      </div></div
  ></router-link>
</template>
