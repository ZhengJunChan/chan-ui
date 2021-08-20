<template>
<component :is="tagName" v-bind="$attrs" />
</template>
<script>
import { defineComponent, computed } from 'vue'

import EditorText from './editor-text/index.vue';
import EditorTable from './editor-table/index.vue';

const TAG_PREFIX = 'editor-'

export default defineComponent({
  name: 'ChanEditor',
  components: {
    EditorText,
    EditorTable
  },
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const tagName = computed(() => `${TAG_PREFIX}${props.type}`)

    return {
      tagName
    }
  }
})
</script>