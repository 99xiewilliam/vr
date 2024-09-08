<!-- <template>
    <div>
      <el-carousel :interval="4000" arrow="always">
        <el-carousel-item v-for="(image, index) in images" :key="index">
          <img :src="image" alt="广角图片" style="width: 100%; height: 100%;" />
        </el-carousel-item>
      </el-carousel>
      <div class="search-overlay">
      <el-input
        v-model="searchQuery"
        placeholder="Search"
        class="search-input"
        clearable
      >
        <template #append>
          <el-button icon="el-icon-search" class="search-button"></el-button>
        </template>
      </el-input>
    </div>
    </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  
  const images = ref([
    '/src/assets/1.jpg',
    '/src/assets/2.jpg',
    '/src/assets/3.jpg',
    '/src/assets/4.jpg',
    // 更多图片 ...
  ]);
  const searchQuery = ref('');
  </script>
  
  <style>
  /* 可根据需要调整样式 */
 
  .el-carousel {
    overflow: hidden;
    position: fixed;
    width: 100%;        
    height: 400px;
    margin: 0;         
    padding: 0;      
    left: 0;
    top: 0;  
    text-align: center;
  }
  .el-carousel__item {
  width: 100%; /* 设置与父元素相同的宽度 */
  height: 450px;
  position: fixed;
  margin: 0;
  padding: 0;
  object-fit: cover;
}
.search-overlay {
  position: fixed; /* 设置为绝对定位 */
  top: 30%; /* 居中 */
  left: 50%;
  transform: translate(-50%, -50%); /* 移动到中心 */
  z-index: 10; /* 确保在其他内容之上 */
  width: 60%; /* 可根据需要调整宽度 */
}

.search-input {
  width: 100%;
}

.search-button {
    background-color: #4CAF50; /* 绿色背景 */
    color: white;
    border-radius: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
   -->

   <template>
    <div class="carousel-container">
        <div class="container-fluid px-0">
            <el-carousel :interval="5000" arrow="always" height="500px">
                <el-carousel-item v-for="(image, index) in images" :key="index">
                <div class="carousel-item d-flex justify-content-center align-items-center" :style="{ backgroundImage: `url(${image.src})` }">
                    <div class="overlay text-center text-white">
                    <h1 class="display-3">{{ image.title }}</h1>
                    <p class="lead">{{ image.subtitle }}</p>
                    <div class="search-box mt-3 mx-auto">
                        <el-input placeholder="搜索" class="search-input">
                        <template #append>
                            <el-button icon="el-icon-search" class="search-button btn btn-success"></el-button>
                        </template>
                        </el-input>
                    </div>
                    </div>
                </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import 'element-plus/dist/index.css'
  const images = ref([
    {
      src: '/src/assets/2.jpg',
      title: 'VR Education',
      subtitle: 'A virtual journey around the world'
    },
    {
      src: '/src/assets/4.jpg',
      title: 'Explore',
      subtitle: 'Discover new places'
    },
    // 更多图片对象
  ]);
  </script>
  
  <style scoped>
  .carousel-container {
  width: 100%;
  margin-top: 0;
  padding: 0;
}
  /* .carousel-container {
    position: relative;
    overflow: hidden;
    width: 100%;        
    margin: 0;         
    padding: 0;      
    left: 0;
    top: 0;  
    text-align: center;
  } */
  
  .carousel-item {
    height: 500px;
    background-size: cover;
    background-position: center;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  
  .overlay {
    background: rgba(0, 0, 0, 0.4);
    flex-direction: column;
    width: 100%;
  }
  
  .search-box {
    width: 60%;
  }
  </style>
  