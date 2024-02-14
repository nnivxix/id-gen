<script setup>
import { ref, onMounted } from "vue";
import { format } from "date-fns";
import { usePopperjs } from "vue-use-popperjs";
import TheForm from "./components/TheForm.vue";
import { useCodeGenerator } from "./composables/useCodeGenerator";

const { generatedCode, generatedId } = useCodeGenerator();
const btn = ref();
const tooltip = ref();
const lastUpated = ref(null);
const version = import.meta.env.VITE_VERSION;

const copyText = async () => {
  navigator.clipboard.writeText(generatedCode.value);
};

usePopperjs(btn, tooltip, {
  trigger: "click-to-toggle",
  placement: "bottom",
});

onMounted(async () => {
  const response = await fetch(import.meta.env.VITE_GITHUB_API_REPO);
  const json = await response.json();

  lastUpated.value = format(new Date(json?.updated_at), "MM/dd/yyyy");
});
</script>

<template>
  <main class="container">
    <h1 class="heading">ID Generator</h1>
    <p>Useful when you need to create id transaction</p>
    <TheForm />
    <p
      id="btn-copy"
      ref="btn"
      :style="!generatedCode ? 'display: none' : 'display: block;'"
      @click="copyText()"
      class="result"
    >
      {{ generatedId }}
      <span id="tooltip" ref="tooltip">
        <div id="arrow" data-popper-arrow></div>
        Copied
      </span>
    </p>
  </main>
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
.container {
  width: 100%;
  min-height: 80vh;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
