<template>
  <div class="navs" :class="{ active: isActive }">
    <a href="" @click.prevent="handleClick" class="lianjie">
        <slot name="text"></slot>
        <slot name="iconfont"></slot>
    </a>
  </div>
</template>

<script>
// import Icon from '@/components/icon.vue';

export default {
  name: 'navs',
  components: {
    // Icon,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit('active', 123);
    },
  },
};
</script>

<style lang="scss" scoped>
.navs {
  padding: 0px 20px;
  transition: .3s;
}
.active{
  background: #e7e7e7;
}
.navs:hover{
  background: rgb(244,244,244);
}
.navs a {
  display: flex;
  justify-content: space-between;
  line-height: 46px;
  font-size: 16px;
  color: #212121;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  outline: none;
}
.navs span {
  line-height: 46px;
  font-size: 16px;
  color: #212121;
  font-weight: 500;
  cursor: pointer;
}
.icon{
    margin-right: -4px;
}
</style>
