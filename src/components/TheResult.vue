<script setup>
import { ref } from "vue";
import { usePopperjs } from "vue-use-popperjs";
import { useCodeGenerator } from "../composables/useCodeGenerator";

const { generatedCode, generatedId } = useCodeGenerator();
const btn = ref();
const tooltip = ref();
const copyText = async () => {
  navigator.clipboard.writeText(generatedCode.value);
};

usePopperjs(btn, tooltip, {
  trigger: "click-to-toggle",
  placement: "bottom",
});
</script>
<template>
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
</template>

<style scoped>
.result {
  padding: 24px;
  background-color: #83d3ae;
  font-size: 24px;
  font-weight: bold;
  color: #213547;
  outline: 7px solid #83d3ae;
  border: 4px dashed #213547;
}
</style>
