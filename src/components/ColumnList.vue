<template>
  <div class="row">
    <div v-for="column in list" :key="column._id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            :alt="column.title"
            class="rounded-circle border border-light my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <!-- <p class="card-text text-left">{{ column.description }}</p> -->
          <!-- <router-link :to="`/column/${column._id}`" class="btn btn-outline-primary">进入专栏</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
  })
</script>

<style scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
</style>
