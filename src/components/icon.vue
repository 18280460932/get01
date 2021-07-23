<template>
    <i class="iconfont" :class="[type,extraClass]"></i>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    extraClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.iconfont{
    font-size: 16px;
    color: #999;
    margin-right: -4px;
    }
</style>

<style lang="scss" scoped>
@import "//at.alicdn.com/t/font_2696914_80gpn641jnp.css";
</style>
