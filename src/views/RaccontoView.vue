<script setup lang="ts">
import { onMounted, ref } from "vue";
import NextPageIcon from "../components/Icons/NextPageIcon.vue";
import PlayVideoIcon from "../components/Icons/PlayVideoIcon.vue";
import { useLightStore } from "@/stores/menuColor";

const videoAdvertisementTitle = ref(null);
const videoAdvertisement = ref(null);
const videoAdvertisementOverlay = ref(null);
const lightStore = useLightStore();

function playVideo() {
  if (videoAdvertisement.value) {
    videoAdvertisement.value.controls = true;
    videoAdvertisementOverlay.value.style.display = "none";
    videoAdvertisement.value.play();
  }
}

function scrollToVideo() {
  videoAdvertisementTitle.value.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

onMounted(() => {
  lightStore.light = false;
});
</script>

<template>
  <div class="container mt-6 mx-auto section">
    <div class="flex flex-col md:flex-row gap-0 items-center">
      <div
        class="flex justify-center w-full md:flex-1 relative h-64 md:h-[35rem] lg:h-[45rem]"
      >
        <img
          class="absolute h-[24rem] object-cover md:h-auto md:w-[35rem] lg:w-[48rem] xl:w-[52rem] md:max-w-none md:translate-x-24 lg:translate-x-36 transition-all"
          src="@/assets/img/Verdi.png"
          alt=""
        />
      </div>
      <div
        class="z-10 flex flex-col p-5 gap-4 md:gap-9 justify-center md:flex-1 md:w-4/5"
      >
        <h1>
          Scopri<br class="hidden md:block" />
          il mondo dell’opera
        </h1>
        <h6>Musica, storie e spettacoli da vivere in ogni momento.</h6>
        <button class="btn w-full md:w-fit" @click="scrollToVideo">
          Inizia
        </button>
      </div>
    </div>
  </div>

  <div class="container mx-auto section">
    <h2 class="text-center scroll-my-28" ref="videoAdvertisementTitle">
      Vivi le emozioni <br class="hidden md:block" />
      del dietro le quinte
    </h2>
    <div class="relative lg:w-3/4 mx-auto">
      <video
        ref="videoAdvertisement"
        controlslist=" nodownload"
        playsinline="true"
        loop="false"
        preload="auto"
        poster="@/assets/img/videothumbnail.png"
        src="@/assets/video/oOo_Video_Promozionale_Export_Web.mp4"
        class="rounded-xl"
      ></video>
      <div
        class="absolute top-0 left-0 w-full h-full flex cursor-pointer bg-black opacity-50"
        ref="videoAdvertisementOverlay"
        @click="playVideo"
      >
        <PlayVideoIcon class="h-40 md:h-60 w-auto m-auto" />
      </div>
    </div>
  </div>

  <div class="container mx-auto section">
    <div class="lg:w-3/5 mx-auto text-center p-5">
      <h2 class="">
        Un dialogo <br class="hidden md:block" />
        tra innovazione e tradizione
      </h2>
      <p>
        L’arte dell’opera lirica ha radici molte antiche, ma le prime vere e
        proprie composizioni risalgono al Cinquecento negli ambienti ristretti
        delle corti.
        <br />A partire del Seicento
        <strong> tradizione viene portata al pubblico</strong>, diventando
        pratica di intrattenimento nelle piazze e nei teatri.
      </p>
      <h6>
        Oggi, così come allora, l’opera è tornata ad esser vista come settore di
        nicchia, riservato ad ambienti classici ed elitari.
      </h6>
      <p>
        oOo si propone come portavoce di questo mondo, pronto ad affrontare il
        cambiamento e a trovare
        <strong>un nuovo modo di vivere e condividere l’opera.</strong>
      </p>
    </div>
  </div>

  <div class="relative section">
    <div class="container mx-auto">
      <div class="mx-auto text-center p-5">
        <img src="@/assets/img/collage-teatro.jpg" class="rounded-xl" alt="" />
      </div>
    </div>
    <div class="absolute top-1/2 w-full h-1/2 bg-white -z-10"></div>
  </div>

  <div class="section relative lightMode">
    <div class="container mx-auto">
      <div class="lg:w-3/5 mx-auto text-center p-5">
        <h1 class="font-medium">
          L’opera lirca vanta un
          <span class="text-orange">patrimonio culturale</span> vasto e ricco di
          curiosità che permette di attrarre
          <span class="text-green">diverse generazioni</span>
        </h1>
      </div>
    </div>
  </div>

  <div class="h-24 lightMode"></div>

  <div class="section relative lightMode">
    <div class="md:container mx-auto text-center">
      <h2>Gli oOoperatori</h2>
      <div class="flex flex-col md:flex-row md:justify-evenly">
        <div id="fra" class="flex">
          <div class="flex flex-col items-center self-start pl-5">
            <div
              class="w-44 h-44 md:w-48 md:h-48 p-2 border-8 border-orange rounded-full mb-1 md:mb-2"
            >
              <img
                src="@/assets/img/cami.png"
                class="rounded-full object-cover"
                alt=""
              />
            </div>
            <p
              class="font-display font-extrabold text-2xl md:text-4xl mb-1 md:mb-2"
            >
              Camilla<br />Campisano
            </p>
            <p class="font-medium mb-1 md:mb-2">Visual Designer</p>
            <p class="mb-1 md:mb-2">cami@lirica.ooo</p>
          </div>
          <div class="py-2 mb-1 md:mb-2 grow md:hidden">
            <div class="h-40 md:w-48 md:h-48 w-full flex items-center">
              <div class="h-2 bg-orange w-full"></div>
            </div>
          </div>
        </div>
        <div id="fra" class="flex">
          <div class="py-2 mb-1 md:mb-2 grow md:hidden">
            <div class="h-40 md:w-48 md:h-48 w-full flex items-center">
              <div class="h-2 bg-green w-full"></div>
            </div>
          </div>
          <div class="flex flex-col items-center self-start pr-5">
            <div
              class="w-44 h-44 md:w-48 md:h-48 p-2 border-8 border-green rounded-full mb-1 md:mb-2"
            >
              <img
                src="@/assets/img/ceci.png"
                class="rounded-full object-cover"
                alt=""
              />
            </div>
            <p
              class="font-display font-extrabold text-2xl md:text-4xl mb-1 md:mb-2"
            >
              Cecilia<br />Minasi
            </p>
            <p class="font-medium mb-1 md:mb-2">Brand Designer</p>
            <p class="mb-1 md:mb-2">ceci@lirica.ooo</p>
          </div>
        </div>
        <div id="fra" class="flex">
          <div class="flex flex-col items-center self-start pl-5">
            <div
              class="w-44 h-44 md:w-48 md:h-48 p-2 border-8 border-purple rounded-full mb-1 md:mb-2"
            >
              <img
                src="@/assets/img/fra.jpeg"
                class="rounded-full object-cover"
                alt=""
              />
            </div>
            <p
              class="font-display font-extrabold text-2xl md:text-4xl mb-1 md:mb-2"
            >
              Francesco<br />Ulleri
            </p>
            <p class="font-medium mb-1 md:mb-2">Creative Developer</p>
            <p class="mb-1 md:mb-2">fra@lirica.ooo</p>
          </div>
          <div class="py-2 mb-1 md:mb-2 grow md:hidden">
            <div class="h-40 md:w-48 md:h-48 w-full flex items-center">
              <div class="h-2 bg-purple w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="lightMode">
    ciao
    <p>ciaoooooooooooo</p>
  </div> -->

  <router-link :to="{ name: 'brand' }">
    <div class="bg-red py-20 md:py-24">
      <div class="container-fluid mx-auto">
        <div class="flex text-center justify-center items-center gap-2">
          <h2 class="m-0">L’identità di oOo</h2>
          <NextPageIcon class="h-8 w-8 sm:h-12 sm:w-12 md:h-20 md:w-20" />
        </div>
      </div></div
  ></router-link>
</template>
