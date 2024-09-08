<template>
    <div class="navbar">
        <nav>
        <ul>
            <li>360° Photo</li>
            <li>360° Video</li>
            <li>Photogallery</li>
            <li>Price List</li>
        </ul>
        </nav>
    </div>
  </template>
  
  <script setup>
  // 这里可以添加一些逻辑，若有需要的话
  </script>
  
  <style>
  .navbar {
    position: fixed;
    width: 100%;        /* 使导航栏宽度充满浏览器 */
    background-color: blue; /* 可根据需要设置背景颜色 */
    margin: 0;         /* 去除外边距 */
    padding: 0;        /* 去除内边距 */
    left: 0;
    top: 0;
    z-index: 999999;
}
  nav {
    background-color: #005f9e; 
    padding: 15px;
    margin: 0;
    text-align: center;
    width: 100%;
    left: 0;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
  }
  
  li {
    color: white;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  li:hover {
    color: #ffd700; 
  }
  </style>
  