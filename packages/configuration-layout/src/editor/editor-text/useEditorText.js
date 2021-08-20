import { reactive, toRefs } from 'vue'
import { defaultConfig } from './config';

export default function useForm(props) {
  const { modelValue } = toRefs(props)
  const {data, style} = toRefs(modelValue.value)
  console.log(toRefs(modelValue))

  return {
    config: modelValue,
    data,
    style,
  };
}
