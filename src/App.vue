<!-- <script setup>
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'
import ContentGrid from '@/components/ContentGrid.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
</script>

<template>
  <div id="app" class="common-layout">
    <el-container>
      <el-header>
        <Navbar /> 
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <Carousel />
            <ContentGrid />
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style>

</style> -->

<template>
  <div id="app" class="container-fluid px-0 flex-shrink-0">
    <global-header></global-header>
    <router-view></router-view>
    <!-- <loader v-if="isLoading" text="拼命加载中" background="rgba(0, 0, 0, 0.8)"></loader> -->
  </div>
  <footer class="text-center py-4 text-secondary bg-light mt-auto">
    <small>
      <ul class="list-inline mb-0">
        <li class="list-inline-item">360VR Photo</li>
        <li class="list-inline-item">360VR Video</li>
        <li class="list-inline-item">360VR 3D</li>
        <li class="list-inline-item">更多</li>
      </ul>
    </small>
  </footer>
</template>

<script setup>
import { computed, watch } from 'vue'

import GlobalHeader from './components/GlobalHeader.vue'




// 监视 error 的状态

</script>

<style>
/* 样式区域 */

</style>
