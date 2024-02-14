<script setup>
import { ref, onMounted } from "vue";
import { format } from "date-fns";
const lastUpated = ref(null);
const version = import.meta.env.VITE_VERSION;

onMounted(async () => {
  const response = await fetch(import.meta.env.VITE_GITHUB_API_REPO);
  const json = await response.json();

  lastUpated.value = format(new Date(json?.updated_at), "MM/dd/yyyy");
});
</script>
<template>
  <footer>
    <p>
      Created by
      <a href="https://twitter.com/nnivxix" target="_blank">Hanasa</a>
    </p>

    <p>
      Last Updated:
      {{ format(new Date(lastUpated), "MM/dd/yyyy") }}
    </p>
    <p>
      Version:
      {{ version }}
    </p>
  </footer>
</template>

<style>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
