<template>
   <table class="search" id="search">
    <tr>
    <td><button class="search-img" id="search-img"></button></td>
    <td><input class="search-space" id="search-space" /></td>
</tr>
  </table>
</template>

<script setup>

</script>

<style>
.search{
    height: 100px;
    width:auto;
    margin-left:auto;
    margin-right:auto;
}
.search-img{
    background-image: url(../../testimg/search-logo-2-fixed2.png);
    background-color:white;
    background-repeat: no-repeat;
    background-position:center;
    height: 70px;
    width:70px;
    border-width : 1px;
    scale:calc(0.77);

}
.search-space{
    height:50px;
    width:300px;
    font-size:20px;
}
</style>