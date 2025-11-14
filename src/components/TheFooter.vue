<script setup>
import { ref } from "vue";
const lastUpated = ref("11/14/2025");
const VERSION = "0.0.3";
</script>
<template>
  <footer>
    <p>
      Created by
      <a href="https://twitter.com/nnivxix" target="_blank">Hanasa</a>
    </p>

    <p>
      Last Updated:
      {{ lastUpated }}
    </p>
    <p>
      Version:
      {{ VERSION }}
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
