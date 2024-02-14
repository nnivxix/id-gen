<script setup>
import TheForm from "./components/TheForm.vue";
import TheResult from "./components/TheResult.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <main class="container">
    <h1 class="heading">ID Generator</h1>
    <p>Useful when you need to create id transaction</p>
    <TheForm />
    <TheResult />
  </main>
  <TheFooter />
</template>

<style>
.container {
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
