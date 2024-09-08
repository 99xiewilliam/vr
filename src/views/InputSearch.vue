<template>
    <div class="search-container">
      <el-input
        v-model="searchQuery"
        placeholder="Search"
        class="search-input"
        clearable
      >
        <template #append>
            <el-icon><Search /></el-icon>
        </template>
      </el-input>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchQuery = ref('');
  </script>
  
  <style scoped>
  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('path/to/your/background-image.jpg');
    background-size: cover;
    padding: 20px;
  }
  
  .search-input {
    width: 100%;
    max-width: 600px;
  }
  
  .el-input__inner {
    border-radius: 0;
    border: none;
    box-shadow: none;
  }
  
  
  .search-button .el-icon-search {
    font-size: 20px;
  }
  </style>
  