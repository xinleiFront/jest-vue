<template>
  <div class="undolist">
    <div class="title">
      正在进行
      <span data-test="count" class="count">{{ list.length }}</span>
    </div>
    <ul class="list">
      <li
        v-for="(item, index) in list" :key="index"
        data-test="item"
        class="item"
        @click="() => {changeStatus(index)}"
      >
        <input
          class="user-input"
          v-if="item.status === 'input'"
          data-test="input"
          :value="item.value"
          @blur="handleInputBlur"
          @change="(e) => handleInputChange(e.target.value, index)"
        />
        <span v-else>{{ item.value }}</span>
        <span
          data-test="delete-button"
          @click="() => {handleDelete(index)}"
          class="delete"
        >-</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['list'],
  methods: {
    handleDelete (index) {
      this.$emit('delete', index)
    },
    changeStatus (index) {
      this.$emit('status', index)
    },
    handleInputBlur () {
      this.$emit('reset')
    },
    handleInputChange (value, index) {
      this.$emit('change', {
        value,
        index
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.undolist {
  margin: 0 auto;
  width: 600px;
}
.title {
  margin: 10px 0;
  line-height: 30px;
  font-size: 24px;
  font-weight: bold;
}
.count {
  margin-top 5px
  float: right;
  display block;
  width 20px
  height 20px
  line-height 20px
  text-align center
  background: #e6e6e6;
  border-radius 10px
  font-size 12px
  color #000
}
.list {
  list-style-type: none;
}
.item {
  margin-bottom 10px
  line-height 32px
  font-size 14px
  background #ffffff
  border-left 5px solid #629a9a
  border-radius 3px
  text-indent 10px
}
.delete {
  margin-top 5px
  margin-right 10px
  float: right;
  display block;
  width 20px
  height 20px
  line-height 20px
  text-align center
  background: #e6e6e6;
  border-radius 10px
  font-size 12px
  color #000
  text-indent 0
  cursor pointer
}
.user-input {
  width 460px
  height 22px
  text-indent 10px
}
</style>
