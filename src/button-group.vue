<template>
  <div class="button-group">
    <slot/>
  </div>
</template>

<script>
export default {}
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