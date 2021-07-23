<template>
  <div class="navs">
    <a href="" @click.prevent="" class="lianjie">
        <span> 发现频道</span>
        <span><Icon type="icon-youjiantou" extraClass='icon' /></span>
    </a>
  </div>
</template>

<script>
import Icon from '@/components/icon.vue';

export default {
  name: 'navs',
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.navs {
  background: #e7e7e7;
  padding: 0px 20px;
}
.navs:hover{
  background: rgb(244,244,244);
  transition: .3s;
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
