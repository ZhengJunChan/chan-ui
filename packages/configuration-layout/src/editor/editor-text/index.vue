<template>
<div>
  <el-form
    label-width="100px"
    :model="config"
  >
    <el-form-item label="文字">
      <el-input v-model="config.data.text" @input="handleTextChange"></el-input>
    </el-form-item>
    <el-form-item label="字体大小">
      <el-select v-model="config.style.fontSize" placeholder="Select">
        <el-option
          v-for="size in fontSizeOptions"
          :key="size"
          :label="size"
          :value="size"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="位置">
      <el-select v-model="config.style.textAlign" placeholder="Select">
        <el-option
          v-for="item in positionOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="宽">
      <el-input v-model="config.style.width" @input="handleWidthChange"></el-input>
    </el-form-item>
    <el-form-item label="高">
      <el-input v-model="config.style.height" @input="handleHeightChange"></el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { positionOptions, fontSizeOptions } from './config';
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption } from 'element-plus'

import useEditorText from './useEditorText';
export default defineComponent({
  components: {
    ElForm, ElFormItem, ElInput, ElSelect, ElOption
  },
  props: {
    modelValue: {
      type: Object,
      defualt: () => ({
        data: {},
        style: {}
      })
    },
    data: {
      type: Object,
      defualt: () => ({})
    },  
    style: {
      type: Object,
      defualt: () => ({})
    }
  },
  emits: ['update:modelValue', 'update:data', 'update:style'],
  setup(props, {emit}) {
    console.log(ref(1), reactive({}))
    const { config, data, style } = useEditorText(props)
    

    const updateConfig = (config) => {
      emit('update:modelValue', config)
    }
    const updateData = (data) => {
      console.log(data)
      updateConfig({ ...config.value, data })
    }
    const updateStyle = (style) => {
      updateConfig({ ...config.value, style })
    }

    const handleTextChange = (text) => {
      console.log(data.value, text)
      updateData({ ...data.value, text })
    }

    const handleWidthChange = (width) => {
      updateStyle({ ...style.value, width })
    }
    
    const handleHeightChange = (height) => {
      updateStyle({ ...style.value, height })
    }

    // onMounted(() => {
    //   update(config)
    // })

    return {
      config,
      fontSizeOptions,
      positionOptions,
      handleTextChange,
      handleWidthChange,
      handleHeightChange
    }
  }
})
</script>