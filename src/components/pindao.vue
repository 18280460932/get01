<template>
  <ul class="box">
    <li class="list" v-for=" item in items " :key=" item.id " @active="curActive = 1">
      <titles>
        <span class="titlestyle">{{ item.title }}</span>
        <span class="titlenum">{{ item.num }}</span>
      </titles>
    </li>
  </ul>
</template>

<script>
import titles from '@/components/title.vue';

export default {
  components: {
    titles,
  },
  data() {
    return {
      curActive: '1',
      items: [
        { id: 0, title: '热点', num: '1234' },
        { id: 1, title: '中二', num: '1223' },
        { id: 2, title: '萝莉', num: '1114' },
        { id: 3, title: '大叔', num: '1344' },
        { id: 4, title: '事变', num: '1364' },
      ],
    };
  },
};
</script>

<style>
.box{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.list{
  width: 50%;
  height: 46px;
  line-height: 46px;
  font-size: 16px;
  color: #212121;
  font-weight: 500;
  cursor: pointer;
  transition: .3s;
  justify-content: space-between;
}
ul{
 margin:0px;
 padding:0px;
}
ul li{
  list-style-type: none;
}
.titlestyle{
  font-size: 14px;
  max-width: 65px;
  margin-right: 6px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 1;
}
.titlenum{
  font-size: 12px;
  max-width: 45px;
  color: #999;
  flex-shrink: 0;
}
</style>
