<script setup lang="ts">
import NextPageIcon from "../components/Icons/NextPageIcon.vue";
import { useLightStore } from "@/stores/menuColor";
import { onMounted } from "vue";
import LogoIsia from "@/components/Icons/LogoIsia.vue";

const lightStore = useLightStore();

onMounted(() => {
  lightStore.light = false;
});
</script>

<template>
  <div class="container mx-auto mb-10">
    <div class="mx-auto text-center p-5">
      <div class="flex justify-center">
        <img
          class="h-72 md:h-[43rem] object-contain"
          src="@/assets/img/ISIA_Logo_1.png"
          alt=""
        />
      </div>
    </div>
  </div>

  <div class="container mx-auto mb-10">
    <div class="mx-auto text-center p-5">
      <div class="flex justify-center">
        <LogoIsia class="w-48 md:w-[25rem] -translate-y-8 md:-translate-y-32" />
      </div>
    </div>
  </div>

  <div class="container mx-auto p-5">
    <div
      class="flex gap-4 flex-col md:flex-row md:items-baseline lg:w-4/5 mx-auto"
    >
      <div class="md:flex-1">
        <h1 class="m-0 text-center md:text-left">Corso</h1>
      </div>
      <div
        class="text-center md:text-left md:flex-1 md:flex md:flex-col md:justify-center"
      >
        <h6 class="m-0">Digital Application 1</h6>
        <h6 class="m-0 font-light">A.A. 2021/2022</h6>
      </div>
    </div>
  </div>

  <div class="h-20 md:h-35"></div>

  <div class="container mx-auto p-5">
    <div
      class="flex gap-4 flex-col md:flex-row md:items-baseline lg:w-4/5 mx-auto"
    >
      <div class="md:flex-1">
        <h1 class="m-0 text-center md:text-left">Docente</h1>
      </div>
      <div
        class="text-center md:text-left md:flex-1 md:flex md:flex-col md:justify-center"
      >
        <h6 class="m-0">Antonello Lipori</h6>
      </div>
    </div>
  </div>
  <div class="h-20 md:h-35"></div>

  <div class="container mx-auto p-5">
    <div
      class="flex gap-4 flex-col md:flex-row md:items-baseline lg:w-4/5 mx-auto"
    >
      <div class="md:flex-1">
        <h1 class="m-0 text-center md:text-left">Studenti</h1>
      </div>
      <div
        class="text-center md:text-left md:flex-1 md:flex md:flex-col md:justify-center"
      >
        <h6 class="">Camilla Campisano</h6>
        <h6 class="">Cecilia Minasi</h6>
        <h6 class="">Francesco Ulleri</h6>
      </div>
    </div>
  </div>

  <div class="h-20 md:h-40"></div>

  <router-link :to="{ name: 'racconto' }">
    <div class="bg-green py-20 md:py-24">
      <div class="container-fluid mx-auto">
        <div class="flex text-center justify-center items-center gap-2">
          <h2 class="m-0">Torna al racconto</h2>
          <NextPageIcon class="h-8 w-8 sm:h-12 sm:w-12 md:h-20 md:w-20" />
        </div>
      </div></div
  ></router-link>
</template>
