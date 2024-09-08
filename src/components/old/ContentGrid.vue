<template>
    <div class="grid">
      <div class="grid-item" v-for="item in items" :key="item.id">
        <img :src="item.image" :alt="item.title" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const items = ref([
    { id: 1, image: 'photo1.jpg', title: 'Photo 1' },
    { id: 2, image: 'photo2.jpg', title: 'Photo 2' },
    { id: 3, image: 'photo3.jpg', title: 'Photo 3' },
    { id: 4, image: 'photo4.jpg', title: 'Photo 4' },
    { id: 5, image: 'photo1.jpg', title: 'Photo 1' },
    { id: 6, image: 'photo2.jpg', title: 'Photo 2' },
    { id: 7, image: 'photo3.jpg', title: 'Photo 3' },
    { id: 8, image: 'photo4.jpg', title: 'Photo 4' },
    // More items...
  ]);
  </script>
  
  <style>
  .grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    position: fixed;
    margin: 0;
    top: 600px;
  }
  .grid-item {
    margin: 10px;
  }
  </style>
  