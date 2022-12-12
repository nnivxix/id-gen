<script setup>
import TheForm from './components/TheForm.vue';
import { codeGenerated, codeInit } from './compossable/CodeGenerated';

const copyText = () => {
  navigator.clipboard.writeText(codeGenerated.value)
  .then(() =>  'ok')
  .catch(e => console.error(e))
}
</script>

<template>
  <main class="container">
    <h1>ID Generator</h1>
    <p>Useful when you need to create id transaction</p>
    <TheForm/>
    <p :style="!codeInit ? 'background-color:transparent;' : 'background-color: #83d3ae;'" @click="copyText()" class="result">{{ codeGenerated }}</p>
  </main>
  <footer>
    <p>Created by <a href="http://twitter.com/nnivxix" target="_blank">Hanasa</a></p>
  </footer>
</template>

<style>
.container{
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.result {
  padding: 24px;
  /* background-color: #83d3ae; */
  font-size: 24px;
  font-weight: bold;
  color: #213547;
}

footer {
  display: flex;
  justify-content: center;
}
</style>

