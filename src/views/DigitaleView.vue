<script setup lang="ts">
import NextPageIcon from "../components/Icons/NextPageIcon.vue";
import { useLightStore } from "@/stores/menuColor";
import { onMounted } from "vue";

const lightStore = useLightStore();

onMounted(() => {
  lightStore.light = false;
});
</script>

<template>
  <div class="pt-6 section overflow-hidden">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row gap-0 items-center">
        <div
          class="flex justify-center w-full md:flex-1 relative h-96 md:h-[31rem] lg:h-[35rem] xl:w-[35rem] md:order-1"
        >
          <img
            class="absolute h-[24rem] object-cover md:h-auto md:w-[28rem] lg:w-[36rem] xl:w-[36rem] md:max-w-none md:-translate-x-6 lg:-translate-x-0 transition-all"
            src="@/assets/img/app-hero.png"
            alt=""
          />
        </div>
        <div
          class="z-10 flex flex-col p-5 gap-4 md:gap-9 justify-center md:flex-1 md:order-2"
        >
          <h1>App</h1>
          <h6 class="mb-0 md:w-4/5">
            oOo, l’app dedicata a spettatori e organizzatori d’opera.
          </h6>
          <p class="md:w-4/5">
            oOo semplifica l’esperienza dello spettatore nella scelta e nella
            comprensione degli spettacoli d’opera lirica. Facilita attori,
            teatri e tecnici del settore nella ricerca di personale e di
            occasioni lavorative.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="md:h-20"></div>

  <div class="pt-6 section">
    <div class="container mx-auto">
      <h2 class="text-center">Porta l'opera sempre con te</h2>
      <div class="flex overflow-x-scroll scrollbar-hide gap-8 p-6 md:hidden">
        <img class="w-48 h-fit" src="@/assets/img/playstore-1.png" alt="" />
        <img class="w-48 h-fit" src="@/assets/img/playstore-2.png" alt="" />
        <img class="w-48 h-fit" src="@/assets/img/playstore-3.png" alt="" />
        <img class="w-48 h-fit" src="@/assets/img/playstore-4.png" alt="" />
        <img class="w-48 h-fit" src="@/assets/img/playstore-5.png" alt="" />
      </div>
      <div class="scrollbar-hide gap-8 p-6 hidden md:flex">
        <div class="">
          <img class="w-full h-fit" src="@/assets/img/playstore-1.png" alt="" />
        </div>
        <div class="">
          <img class="w-full h-fit" src="@/assets/img/playstore-2.png" alt="" />
        </div>
        <div class="">
          <img class="w-full h-fit" src="@/assets/img/playstore-3.png" alt="" />
        </div>
        <div class="">
          <img class="w-full h-fit" src="@/assets/img/playstore-4.png" alt="" />
        </div>
        <div class="">
          <img class="w-full h-fit" src="@/assets/img/playstore-5.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container mx-auto p-5">
      <div class="flex flex-col md:flex-row gap-9">
        <div
          class="md:text-left md:flex-1 md:flex md:flex-col md:justify-center md:order-1"
        >
          <h2 class="lg:text-7xl mb-5 md:mb-10 lg:mb-16">Libretto Digitale</h2>
          <h6 class="md:mb-2 lg:mb-8">Segui le scene senza preoccupazione.</h6>
          <p class="lg:w-4/5">
            All’interno del libretto digitale, il testo scorrerà automaticamente
            seguendo il ritmo della musica, così potrai rilassarsi e seguire le
            tue opere preferite.
          </p>
        </div>
        <div class="md:flex-1 md:order-2">
          <img class="" src="@/assets/img/libretto.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container mx-auto p-5">
      <div class="flex flex-col md:flex-row gap-9">
        <div
          class="md:text-left md:flex-1 md:flex md:flex-col md:justify-center md:order-2"
        >
          <h2 class="lg:text-7xl mb-5 md:mb-10 lg:mb-16">
            Connettiti <br class="md:hidden xl:block" />
            con altri artisti
          </h2>
          <h6 class="md:mb-2 lg:mb-8">Trova e offri lavoro su oOo.</h6>
          <p class="lg:w-4/5">
            Grazie alla sezione di networking, potrai postare o cercare offerte
            di lavoro dedicate ai professionisti del settore.
          </p>
        </div>
        <div class="md:flex-1 md:order-1">
          <img class="lg:w-4/5" src="@/assets/img/linkedin.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container mx-auto p-5">
      <div class="flex flex-col items-center text-center">
        <img
          class="w-36 md:w-48 lg:w-60 mb-12"
          src="@/assets/img/playstore-voce.png"
          alt=""
        />
        <h2 class="mb-4">Scarica oOo</h2>
        <h6>Sorprendi tutti al prossimo spettacolo</h6>
        <div class="flex w-full gap-4 justify-center md:w-2/5">
          <div class="">
            <img class="flex-1" src="@/assets/img/badge-playstore.png" alt="" />
          </div>
          <div class="">
            <img class="flex-1" src="@/assets/img/badge-appstore.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="lightMode">
    <div class="h-20 md:h-40"></div>

    <div class="pt-6 section overflow-hidden">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-0 items-center">
          <div
            class="flex justify-center w-full md:flex-1 relative h-[18rem] sm:h-[24rem] md:h-[31rem] lg:h-[35rem] xl:w-[56rem] md:order-2"
          >
            <img
              class="absolute h-[16rem] sm:h-[22rem] object-cover md:h-auto md:w-[28rem] lg:w-[36rem] xl:w-[56rem] md:max-w-none md:-translate-x-6 lg:-translate-x-0 transition-all"
              src="@/assets/img/collage-sito-web.png"
              alt=""
            />
          </div>
          <div
            class="z-10 flex flex-col p-5 gap-4 md:gap-9 justify-center md:flex-1 md:order-1"
          >
            <h1>Sito Web</h1>
            <h6 class="mb-0 md:w-4/5">oOo, opera oltre opera.</h6>
            <p class="md:w-4/5">
              Goditi lo spettacolo direttamente da casa grazie al servizio di
              streaming d’opera. Preparati all’esperienza in teatro leggendo la
              storia dell’opera, le trame e il glossario delle parole più usate.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="h-20 md:h-40"></div>
    <div class="pt-6 section">
      <div class="container mx-auto text-center flex flex-col items-center">
        <h2>
          Raccontare, vivere,<br />
          esplorare, connettere
        </h2>
        <img class="md:w-4/5" src="@/assets/img/collage-sito-web2.png" alt="" />
      </div>
    </div>

    <div class="h-20 md:h-40"></div>

    <div class="section">
      <div class="mx-auto">
        <div class="flex flex-col md:flex-row gap-9">
          <div
            class="md:text-left md:flex-1 md:flex md:flex-col md:justify-center md:order-2 p-5"
          >
            <h2 class="lg:text-7xl mb-5 md:mb-10 lg:mb-16">
              Non perdere <br class="md:hidden xl:block" />
              neanche un momento
            </h2>
            <h6 class="md:mb-2 lg:mb-8">Guarda le tue opere preferite.</h6>
            <p class="lg:w-4/5">
              Nella sezione streaming potrai accedere ad un mondo di opere
              liriche che potrai guardare comodamente quando vuoi e come vuoi.
            </p>
          </div>
          <div class="md:flex-1 md:order-1">
            <img
              class="min-h-full object-cover w-11/12 lg:w-full rounded-r-3xl"
              src="@/assets/img/streaming.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="mx-auto">
        <div class="flex flex-col md:flex-row gap-9">
          <div class="md:flex-1 flex justify-end">
            <div
              class="md:text-left lg:w-4/5 md:flex md:flex-col md:justify-center md:order-1 p-5"
            >
              <h2 class="lg:text-7xl mb-5 md:mb-10 lg:mb-16">
                Resta aggiornato <br class="md:hidden xl:block" />
                e programma <br class="hidden xl:block" />le tue serate
              </h2>
              <h6 class="md:mb-2 lg:mb-8">Consulta il calendario.</h6>
              <p class="">
                Scopri quali opere andranno in scena in futuro e acquista i
                biglietti per essere pronto al momento giusto.
              </p>
            </div>
          </div>
          <div class="md:flex-1 md:order-2 flex justify-end">
            <img
              class="min-h-full object-cover w-11/12 lg:w-full"
              src="@/assets/img/calendario.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <router-link :to="{ name: 'crediti' }">
    <div class="bg-orange py-20 md:py-24">
      <div class="container-fluid mx-auto">
        <div class="flex text-center justify-center items-center gap-2">
          <h2 class="m-0">Gli autori di oOo</h2>
          <NextPageIcon class="h-8 w-8 sm:h-12 sm:w-12 md:h-20 md:w-20" />
        </div>
      </div></div
  ></router-link>
</template>
