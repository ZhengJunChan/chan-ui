<template>
<div class="chan-drag-drop-layout">
    <div>
      <chan-drag-item v-for="item in dragItems" :key="item.name" @dragstart="handleDragStart($event, item)" v-bind="item" :title="item.name" />
    </div>
    <div class="chan-drag-drop-layout__drop-view" @dragover="handleDragover" @drop="handleDrop">
      <component
        v-for="item in dropItems" :key="item.key"
        :is="item.tagName"
        v-bind="configuration[item.key]"
        :class="{
          selected: item.key === selectedDropItem.key
        }"
        @click="handleDropItemClick(item)"
      />
    </div>
    <div class="chan-drag-drop-layout__editor">
      <ChanEditor v-if="showEditor"
      v-model="configuration[selectedDropItem.key]"
      :type="selectedDropItem.dragName" />
    </div>
</div>
</template>
<script>
import 'element-plus/dist/index.css'

import { defineComponent, nextTick, reactive, ref } from 'vue'

import useDragDropLayout from './uses/use-drag-drop-layout';

import ChanDragItem from './drag-item.vue'
import ChanDropText from './drop-text.vue'
import ChanEditor from './editor/index.vue';

export default defineComponent({
  name: 'ChanDragDropLayout',
  components: {
    ChanEditor,
    ChanDragItem,
    ChanDropText,
  },
  props: {
      dragItemsOptions: {
          type: Array,
          default: () => []
      }
  },
  setup(props) {

    const {
      filterDragItems,
      setDragItemName,
      allowDrop,
      getDropItemByDragItemName,
    } = useDragDropLayout()

    const showEditor = ref(true)
    const dragItems = filterDragItems(props.dragItemsOptions)
    const dropItems = reactive([])
    const configuration = reactive({})
    let selectedDropItem = reactive({})

    // 添加dropItem
    const addDropItem = (dropItem) => {
      dropItems.push(dropItem)
    }

    // 添加configItem
    const addConfigItem = (config) => {
      configuration[config.key] = config
    }

    const handleDropItemClick = ({key, dragName}) => {
      showEditor.value = false
      selectedDropItem.key = key
      selectedDropItem.dragName = dragName
      nextTick(() => {
        showEditor.value = true
      })
    }

    // 开始拖拽
    const handleDragStart = (event, item) => {
      console.log('handleDragStart', event)
      setDragItemName(event, item)
    }

    // 组件拖拽至视图上方
    const handleDragover = (event) => {
      // 允许放置
      allowDrop(event)
    }

    // 组件拖拽至视图上方
    const handleDrop = (event) => {
      const dropItem = getDropItemByDragItemName(event)

      addDropItem(dropItem.drop)
      addConfigItem(dropItem.configuration)
    }

    return {
      showEditor,
      dragItems,
      dropItems,
      configuration,
      selectedDropItem,
      handleDragStart,
      handleDragover,
      handleDrop,
      handleDropItemClick,
    }
  },
})
</script>
