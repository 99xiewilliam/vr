<template>
    <div class="home-page container-md">
        <Carousel/>
      
      <h4 class="font-weight-bold text-center">发现精彩</h4>
      <column-list :list="list"></column-list>
      <button
        class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25 load-more"
      >加载更多</button>
    </div>
  </template>
  <script setup>
    import { ref } from 'vue'
    import ColumnList from '../components/ColumnList.vue'
    import Carousel from '../components/Carousel.vue'
    
    const list = ref([{_id:1, avatar:'', title:'123'}, {_id:2, avatar:'', title:'456'}, {_id:3, avatar:'', title:'789'}, {_id:4, avatar:'', title:'101112'}, {_id:5, avatar:'', title:'131415'}, {_id:6, avatar:'', title:'456'}]);
    console.log(list.value);
 
  </script>
  
  <style scoped>
  .load-more {
    margin-left: 50% !important;
    transform: translate3d(-50%, 0, 0);
  }
  </style>
  