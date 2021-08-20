<template>
<div>
    <ChanDragDropLayout :dragItemsOptions="dragItemsOptions" />
</div>
</template>
<script>
import { defineComponent } from 'vue'
import ChanDragDropLayout from './drag-drop-layout.vue'

export default defineComponent({
  name: 'ChanConfigurationLayout',
  components: {
    ChanDragDropLayout
  },
  data() {
    return {
      dragItemsOptions: [
        'text',
        'table'
      ]
    }
  },
})
</script>
