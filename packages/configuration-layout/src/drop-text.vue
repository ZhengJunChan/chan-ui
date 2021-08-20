<template>
<div :style="componentStyle">
  {{componentData.text}}
</div>
</template>
<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'ChanDropInput',
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const componentData = computed(()=> {
      return {
        ...props.data
      }
    })   
    const componentStyle = computed(()=> {
      return {
        display: 'inline-block',
        // fontSize: props.fontSize,
        // textAlign: props.textAlign,
        // width: props.width,
        // height: props.height,
        ...props.style
      }
    })   
    //methods
    const handleDragStart = (event) => {
      emit('dragstart', event)
    }

    return {
      componentData,
      componentStyle,
      handleDragStart,
    }
  },
})
</script>
