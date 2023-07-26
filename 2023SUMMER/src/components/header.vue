<template>
  <nav class='head' id='head'>
    <button class="logo-button">
    </button>
  <div class="select">
    <div class="prev-login">
    <button class="action" id="login" >로그인</button>
    <button class="action" id="register" >회원가입</button>
  </div>
  <div class="next-login">
    <a class='username' id='username' href="마이페이지 링크">유저이름</a>
    <button class="action" id="logout">로그아웃</button>
  </div>
  </div>
</nav>
</template>

<script setup>

</script>

<style>
.head{
 background-color: #dddddd;
 height: 80px;
 width:100%;
}
.logo-button{
  display:inline-block;
  position:absolute;
  height: 70px;
  width: 70px;
  background-image: url("../../testimg/logo.png");
  background-repeat: no-repeat;
  background-color:transparent;
  margin-left: 30px;
  margin-top:10px;
  border:none;
}
.select{
  height:70px;
  width:auto;
  display:inline-block;
  position:absolute;
  left:75%;
  margin-top:10px;
}
.username{
  font-size: 20px;
  margin-right:15px;
  color: black;
}
.action{
  font-size:20px;
  width:110px;
  height:35px;
  background-color:#aaaaaa;
  border-radius: 0px;
  margin-top:15px;
  margin-right:30px;
  border-width: 0px;
}
.next-login{
  visibility: hidden;
}
</style>