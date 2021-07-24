<template>
    <div class="">
        <navs :isActive="curActive === 'dianji'" @active=" curActive = 'dianji' ">
          <template v-slot:text >
            <span> 发现频道</span>
          </template>
          <template v-slot:iconfont>
            <span><Icon type="icon-youjiantou" extraClass='icon' /></span>
          </template>
        </navs>
    </div>
</template>
<script>
import navs from '@/components/navs.vue';
import Icon from '@/components/icon.vue';

export default {
  name: 'titleNav',
  components: {
    navs,
    Icon,
  },
  data() {
    return {
      curActive: '',
    };
  },
  methods: {
    test(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
