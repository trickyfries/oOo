import { ref } from "vue";
import { defineStore } from "pinia";

export const useLightStore = defineStore("light", () => {
  const light = ref(false);

  return { light };
});
