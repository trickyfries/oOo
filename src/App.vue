<script setup lang="ts">
import LogoComponent from "./components/LogoComponent.vue";
import CloseIcon from "./components/Icons/CloseIcon.vue";
import ScrollToTopIcon from "./components/Icons/ScrollToTopIcon.vue";
import HamburgerIcon from "./components/Icons/HamburgerIcon.vue";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useLightStore } from "@/stores/menuColor";

const menuOpen = ref(false);
const currentScroll = ref(0);
const lightStore = useLightStore();

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clickOnMenuItem() {
  closeMenu();
}

onMounted(() => {
  window.onscroll = () => {
    currentScroll.value = window.scrollY;
  };

  console.log(lightStore.light);
});
</script>

<template>
  <header
    class="bg-neutral fixed top-0 left-0 w-full h-full overflow-hidden z-30 circleAnimationClip"
    :class="[menuOpen ? 'expanded' : '', lightStore.light ? 'lightMode' : '']"
  >
    <nav class="flex flex-col h-full justify-end p-5 md:p-10 mb-40">
      <router-link
        class="menuItem"
        :to="{ name: 'racconto' }"
        @click="clickOnMenuItem"
      >
        Racconto
      </router-link>
      <router-link
        class="menuItem"
        :to="{ name: 'brand' }"
        @click="clickOnMenuItem"
      >
        Identità
      </router-link>
      <router-link
        class="menuItem"
        :to="{ name: 'digitale' }"
        @click="clickOnMenuItem"
      >
        Digitale
      </router-link>
      <router-link
        class="menuItem"
        :to="{ name: 'crediti' }"
        @click="clickOnMenuItem"
      >
        Crediti
      </router-link>
    </nav>
  </header>

  <div
    class="sticky top-0 bg-neutral z-40"
    :class="lightStore.light ? 'lightMode' : ''"
  >
    <nav class="flex justify-center p-5">
      <div class="flex-1"></div>
      <div class="flex-none flex items-center">
        <div class="h-8 md:h-10">
          <router-link :to="{ name: 'racconto' }" @click="closeMenu">
            <LogoComponent />
          </router-link>
        </div>
      </div>
      <div class="flex-1 flex justify-end items-center gap-10">
        <div class="h-8 w-8 md:h-10 md:w-10" @click="toggleMenu">
          <HamburgerIcon v-if="!menuOpen" />
          <CloseIcon v-else />
        </div>
      </div>
    </nav>
  </div>

  <main class="min-h-[100vh]">
    <RouterView />
  </main>

  <footer>
    <div
      class="container mx-auto min-h-[90vh] flex flex-col justify-center items-center"
    >
      <router-link :to="{ name: 'racconto' }">
        <LogoComponent class="mb-9 w-56 sm:w-72 md:w-[25rem]" />
      </router-link>
      <div class="md:flex md:w-full">
        <div class="md:w-1/2"></div>
        <div class="flex flex-col md:w-1/2 items-center md:items-start gap-3">
          <router-link class="footerMenuItem" :to="{ name: 'racconto' }">
            Racconto
          </router-link>
          <router-link class="footerMenuItem" :to="{ name: 'brand' }">
            Identità
          </router-link>
          <router-link class="footerMenuItem" :to="{ name: 'digitale' }">
            Digitale
          </router-link>
          <router-link class="footerMenuItem" :to="{ name: 'crediti' }">
            Crediti
          </router-link>
        </div>
      </div>
    </div>
  </footer>

  <div
    class="fixed bottom-5 right-5 md:bottom-12 md:right-12 z-10 transition-opacity"
    @click="scrollToTop"
    :class="currentScroll > 50 ? '' : 'opacity-0 pointer-events-none'"
  >
    <div
      class="h-14 w-14 md:h-16 md:w-16 bg-blackLighter flex justify-center items-center rounded-md hover:cursor-pointer"
    >
      <ScrollToTopIcon class="h-6 w-6 md:h-9 md:w-9" />
    </div>
  </div>
</template>
