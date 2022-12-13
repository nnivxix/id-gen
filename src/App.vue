<script setup>
import { ref } from 'vue'
import { usePopperjs } from "vue-use-popperjs";
import TheForm from './components/TheForm.vue';
import { codeGenerated } from './compossable/CodeGenerated';

const copyText = () => {
  navigator.clipboard.writeText(codeGenerated.value)
  .then(() =>  'ok')
  .catch(e => console.error(e))
}
const btn = ref();
const tooltip = ref();
usePopperjs(btn, tooltip, {
  trigger: 'click-to-toggle',
  placement: 'bottom'
})
</script>

<template>
  <main class="container">
    <h1 class="heading">ID Generator</h1>
    <p>Useful when you need to create id transaction</p>
    <TheForm/>
    <p id="btn-copy" ref="btn"
    :style="!codeGenerated ? 'display: none' : 'display: block;'" 
    @click="copyText()" class="result">
      {{ codeGenerated }}
      <span id="tooltip" ref="tooltip" >
        <div id="arrow" data-popper-arrow></div>
        Copied
      </span>
    </p>
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
  background-color: #83d3ae;
  font-size: 24px;
  font-weight: bold;
  color: #213547;
  outline: 7px solid #83d3ae;
  border: 4px dashed #213547;
}

footer {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.vue-use-popperjs-none {
  display: none;
}
#tooltip {
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
  }
</style>

