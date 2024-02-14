import { ref, computed } from "vue";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("12345ABCDEFGHIJKLMN", 5);
const date = new Date();
const second = ref(1);
const codeInit = ref("");
const generatedCode = ref("");
export function useCodeGenerator() {
  const generatedDate = computed(
    () => `${date.getHours()}${date.getMinutes()}`
  );
  const generatedId = computed(() => {
    if (generatedCode.value === "") {
      generatedCode.value = localStorage.getItem("id-generated");
    }
    return generatedCode.value;
  });

  const Ticksecond = () => {
    second.value += date.getSeconds();
    if (second.value > 60) {
      return (second.value = 0);
    }
    return;
  };

  const generateCode = () => {
    if (!codeInit.value) {
      generatedCode.value = "";
    } else {
      generatedCode.value = `${codeInit.value
        .toLocaleUpperCase()
        .trim()
        .split(" ")
        .join("")}-${nanoid()}-${generatedDate.value}${second.value}`;
      localStorage.setItem("id-generated", generatedCode.value);
    }
  };

  return {
    date,
    second,
    codeInit,
    generatedCode,
    generatedDate,
    generatedId,
    Ticksecond,
    generateCode,
  };
}
