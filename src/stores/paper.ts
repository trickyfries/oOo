
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue';

import paper from "paper";

export const usePaperStore = defineStore('paper', () => {
  const count = ref(0)
  const paperScopes : Ref<paper.PaperScope[]> = ref([]);

  function getPaperScopes()  {return paperScopes.value}

  return { count, paperScopes, getPaperScopes }
})
