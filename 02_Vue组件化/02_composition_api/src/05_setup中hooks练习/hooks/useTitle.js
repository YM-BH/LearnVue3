import { ref, watch } from "vue";

export default function useTitle(titleValue) {

  const title = ref(titleValue)
  watch(title, () => {
    document.title = title.value
  }, {
    immediate: true
  })

  return title
}