<template>
<i :class="`iconfont chan-icon-${name}`"></i>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChanIcon',
  props: {
    name: String,
  },
})
</script>
