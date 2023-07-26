<script setup>
import Header from './components/header.vue'
import Search from './components/search.vue'
import Main_body from './components/main-body.vue'

</script>

<template>
  <!-- header-->
  <Header />

  <!-- 검색창 -->
  <Search />
  
  <!-- top10 추천 부분-->
  <Main_body />
</template>

<style>
body{
  margin:0px;
  overflow:auto;
}
li{
  list-style:none;
}
</style>