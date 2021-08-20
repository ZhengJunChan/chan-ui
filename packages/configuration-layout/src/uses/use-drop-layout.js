import {emit} from 'vue';

import DragItems from '../drag-items'

// 允许放置
const allowDrop = (event) => {
  // 默认地，数据/元素无法被放置到其他元素中。为了实现拖放，我们必须阻止元素的这种默认的处理方式。
  event.preventDefault();
}

// 添加被拖拽的组件
const addElement = (name) => {
  console.log('dragItems', dragItems)
  const dropElement = DragItems.find(item => name === item.name)

  if(dropElement) {
    addedItems.push({
      ...dropElement.drop,
      mark: new Date(),
    })
  }
}

export default function useForm(props) {
  
  const handleDragover = (event) => {
    allowDrop(event)
    console.log('handleDragover')

  }

  const handleDrop = (event) => {
    event.preventDefault();

    const name = event.dataTransfer.getData('name')

    addElement(name)
    
    emit('drop', event)
  }

  return {
    handleDragover
  };
}
