<template>
  <div class="button-group">
    <slot/>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
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
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>