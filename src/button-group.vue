<template>
  <div class="button-group">
    <slot/>
  </div>
</template>

<script>
export default {
  mounted() {
    for(let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if(name !== 'button') {
        console.warn(`wu-button-group 组件里面应放置 wu-button 组件，而不是 ${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button-group {
  display: inline-flex;
  vertical-align: middle;

  > .wu-button {
    margin-right: -1px;
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>