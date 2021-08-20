<template>
<div class="chan-drag-item" draggable="true" @dragstart="handleDragStart">
    <span v-if="title || $slots.title" class="chan-drag-item__title">
      <slot name="title">{{ title }}</slot>
    </span>
    <span class="chan-drag-item__suffix" v-if="suffixIcon || $slots.suffix">
      <slot name="suffix">
        <chan-icon class="chan-drag-item__suffix-icon" :name="suffixIcon" />
      </slot>
    </span>
</div>
</template>
<script>
import { defineComponent } from 'vue'
import ChanIcon from '../../icon/src/index.vue'

export default defineComponent({
  name: 'ChanDragItem',
  components: {
    ChanIcon
  },
  emits: ['dragstart'],
  props: {
    title: String,
    suffixIcon: String,
  },
  setup(props, { emit }) {    
    //methods
    const handleDragStart = (event) => {
      emit('dragstart', event)
    }

    return {
      handleDragStart,
    }
  },
})
</script>
