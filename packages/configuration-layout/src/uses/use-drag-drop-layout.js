import {computed, watchEffect} from 'vue';

import DragItems from '../drag-items'

const TRANSFER_DATA_KEY = 'name'

export default function useForm(props) {
  
  const filterDragItems = (dragItemsOptions) => {
      return computed(() => {
        return DragItems.filter(item => dragItemsOptions.includes(item.name))
      })
  }

  // todo: 编辑时初始化
  const initDropItems = () => {}

  // todo: 编辑时初始化
  const initConfigItems = () => {}

  const initLayout = () => {
    initDragItems()
    initDropItems()
    initConfigItems()
  }

  const setDragItemName = (event, item) => {
    event.dataTransfer.setData(TRANSFER_DATA_KEY, item.name);
  }

  // 允许放置
  const allowDrop = (event) => {
    // 默认地，数据/元素无法被放置到其他元素中。为了实现拖放，我们必须阻止元素的这种默认的处理方式。
    event.preventDefault();
  }
  
  // 根据 dataTransfer 获取被拖拽的元素
  const getDropItemByDragItemName = (event) => {
    event.preventDefault();
    
    const name = event.dataTransfer.getData(TRANSFER_DATA_KEY)
    const dragItem = DragItems.find(item => name === item.name)
    const timestamp = (new Date()).valueOf();
    const key = `${dragItem.name}${timestamp}` // 识别dropItem的唯一值
    
    return {
        drop: {
            ...dragItem.drop,
            key,
            dragName: dragItem.name
        },
        configuration: {
            ...dragItem.configuration,
            key,
            dragName: dragItem.name
        }
    }
  }

  return {
    initLayout,
    filterDragItems,
    setDragItemName,
    allowDrop,
    getDropItemByDragItemName
  };
}
