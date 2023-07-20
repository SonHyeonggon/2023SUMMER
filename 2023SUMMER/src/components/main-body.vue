<template>
<div class="slides">
    <div :style="{marginLeft:'-'+slidesInnerMarginLeft+'px'}" class="slides-inner">
        <div v-for="slide in slides" :key="slide.id" class="slide">
            <img :src="slide.src" />
        </div>
        <div class="navigation">
            <span @click="goToPrev">prev</span>
            <span @click="goToNext">next</span>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue'

let id = 0
const slides = ref([
    { id:id++, src: "../../testimg/test1.jpg" },
    { id:id++, src : "../../testimg/test2.jpg" },
    { id:id++, src : "../../testimg/test3.jpg" },
    { id:id++, src : "../../testimg/test4.jpg" },
    { id:id++, src : "../../testimg/test5.jpg" }],
    currentIndex = 0,
    singleWidth = 300
)
let slidesInnerMarginLeft = computed(()=>{
    return this.currentIndex * this.singleWidth
})
function goToPrev(){

}
function goToNext(){

}
</script>

<style>
.slides{
    position:absolute;
    margin-left : auto;
    margin-right : auto;
    top:40%;
}
.slides-inner{
    width:1500px;
}
.slide{
    display:inline-block;
    width:300px;
}
img{
    max-width:100%;
    transform: scale(1.5);
}
.controls{
    text-align: center;
}
.controls span{
    position:absolute;
    background:#333;
    color:#fff;
    padding:10px 20px;
    margin: 0 10px;
    top:50%;
    transform:translateY(-50%);
}
.controls span.prev{
    right:calc(100% - 200px);
}
.controls span.next{
    left:calc(100% - 200px);
}
</style>