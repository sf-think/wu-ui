<template>
  <button class="wu-button" :class="{[`icon-${iconPosition}`]: true}">
    <wu-icon v-if="icon" :name="icon"></wu-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return ['left', 'right'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wu-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
  }

  > .content {
    order: 2;
    margin-left: 0.1em;
  }

  &.icon-right {
    > .icon {
      order: 2;
    }
    > .content {
      order: 1;
      margin-left: 0;
      margin-right: 0.1em;

    }
  }
}


</style>