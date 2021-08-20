<template>
<div>
  <el-form
    label-width="100px"
    :model="config"
  >
    <el-form-item label="文字">
      <el-input v-model="config.text" @input="handleTextChange"></el-input>
    </el-form-item>
    <el-form-item label="位置">
      <el-select v-model="config.align" placeholder="Select">
        <el-option
          v-for="item in positionOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { positionOptions, defaultConfig } from './config';
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption } from 'element-plus'

export default defineComponent({
  components: {
    ElForm, ElFormItem, ElInput, ElSelect, ElOption
  },
  props: {
    modelValue: {
      type: Object,
      defualt: () => ({
        value
      })
    }
  },
  emits: ['update:config'],
  data() {
    return {
      aa: ''
    }
  },
  setup(props, {emit}) {
    const config = reactive({
      ...defaultConfig,
      ...props.modelValue
    })

    const update = (modelValue) => {
      emit('update:modelValue', modelValue)
    }

    const handleTextChange = () => {
      update(config)
    }

    return {
      config,
      positionOptions,
      handleTextChange
    }
  }
})
</script>