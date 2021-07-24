<template>
    <div class="boxs" style="">
       <titleNav/>
       <pindao/>
    </div>
</template>
<script>
import titleNav from '@/components/titleNav.vue';
import pindao from '@/components/pindao.vue';

export default {
  name: 'redianlist',
  components: {
    titleNav,
    pindao,
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
.boxs {
  width: 500px;
  height:100%;
}
</style>
