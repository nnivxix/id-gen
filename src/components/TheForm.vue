<script setup>
import { useCodeGenerator } from "../composables/useCodeGenerator";

const { codeInit, generatedCode, Ticksecond, generateCode } =
  useCodeGenerator();

setInterval(Ticksecond, 1000);
</script>
<template>
  <div class="theform">
    <form class="form" @submit.prevent="generateCode">
      <input
        class="codeInit"
        type="text"
        placeholder="OVO"
        v-model.lazy="codeInit"
        name="code_init"
        id="code_init"
      />
      <button>Generate Id</button>
    </form>
    <!-- <span style="text-align: center;">OBO-LDCGC-235245</span> -->
  </div>
</template>

<style scoped>
.form input {
  background: #f2f2f2;
  /* width: 100%; */
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  color: #213547;
}
.form button {
  background: #24ad6d;
  color: white;
  /* width: 100%; */
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
</style>
