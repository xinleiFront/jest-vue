import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import Header from '../../components/Header'
import UndoList from '../../components/UndoList'

describe('TodoList 组件', () => {
  it('初始化时， undoList 应该为空', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.undoList
    expect(undoList).toEqual([])
  })

  it('addUndoItem 被执行后，内容会加一项', () => {
    // 集成测试
    // const content = 'dell lee'
    // const wrapper = shallowMount(TodoList);
    // const header = wrapper.find(Header)
    // header.vm.$emit('add', content)
    // const undoList = wrapper.vm.undoList
    // expect(undoList).toEqual([content])

  const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.addUndoItem(4)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 },
      { status: 'div', value: 4 }
    ])
  })

  it('T使用 UndoList 组件，应该传递list参数', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.find(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  it('handleDeleteItem 方法被调用时，UndoList 列表内容会减少一个', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.handleItemDelete(1)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 3 }
    ])
  })

  it('changeStatus 方法执行时，UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.changeStatus(1)
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'input', value: 2 },
      { status: 'div', value: 3 }
    ])
  })

  it('resetStatus 方法执行时，UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'input', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.resetStatus()
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ])
  })

  it('changeItemValue 方法执行时，UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'input', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.changeItemValue({
      index: 1,
      value: '444'
    })
    expect(wrapper.vm.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'input', value: "444" },
      { status: 'div', value: 3 }
    ])
  })
})
