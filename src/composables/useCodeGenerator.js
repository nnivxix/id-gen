import { ref, computed } from "vue";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("12345ABCDEFGHIJKLMN", 5);
const codeInit = ref("");
const generatedCode = ref("");

export function useCodeGenerator() {
  const generatedId = computed(() => {
    if (generatedCode.value === "") {
      generatedCode.value = localStorage.getItem("id-generated");
    }
    return generatedCode.value;
  });

  const generateCode = () => {
    const date = new Date();
    if (!codeInit.value) {
      generatedCode.value = "";
      return;
    }
    generatedCode.value = `${codeInit.value
      .toLocaleUpperCase()
      .trim()
      .split(" ")
      .join(
        ""
      )}-${nanoid()}-${date.getHours()}${date.getHours()}${date.getSeconds()}`;

    localStorage.setItem("id-generated", generatedCode.value);
  };

  return {
    codeInit,
    generatedCode,
    generatedId,
    generateCode,
  };
}
