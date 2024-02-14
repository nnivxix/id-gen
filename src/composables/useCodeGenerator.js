import { ref, computed } from "vue";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("12345ABCDEFGHIJKLMN", 5);
const date = new Date();
const second = ref(1);
const minute = ref(1);
const hour = ref(1);
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
    minute.value = date.getMinutes();
    hour.value = date.getHours();
    if (second.value > 60) {
      second.value = 0;
      // minute.value += 1;
      hour.value += 1;
    }
    // console.log({
    //   getS: date.getSeconds(),
    //   getM: date.getMinutes(),
    //   getH: date.getHours(),
    //   second: second.value,
    //   minute: minute.value,
    //   hour: hour.value,
    // });
    return;
  };

  const generateCode = () => {
    console.log({
      getS: date.getSeconds(),
      getM: date.getMinutes(),
      getH: date.getHours(),
      second: second.value,
      minute: minute.value,
      hour: hour.value,
    });
    if (!codeInit.value) {
      generatedCode.value = "";
    } else {
      generatedCode.value = `${codeInit.value
        .toLocaleUpperCase()
        .trim()
        .split(" ")
        .join("")}-${nanoid()}-${hour.value}${minute.value}${second.value}`;
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
