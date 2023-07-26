<template>
    <div class="slide-body">
        <div class="slides">
            <div v-bind:style="{ width: innerWidth + 'px', marginLeft: slidesInnerMarginLeft + 'px' }" class="slides inner">
                <div v-bind:style="{ width: singleWidth + 'px' }" v-for="slide in slides" :key="slide.id" class="slide">
                    <img :src="slide.src" class="slide-img"/>
                </div>
            </div>
        </div>
        <span class='nav button prev' @click="goToPrev"><img class="nav-image prev-image" src="../../testimg/left-arrow.png" /></span>
        <ul class="nav ul">
                <li class="nav number" :class="{active:currentIndex === slide.id}" v-for="slide in slides" :key="slide.id">●</li>
            </ul>
        <span class='nav button next' @click="goToNext"><img class="nav-image next-image" src="../../testimg/right-arrow.png" /></span>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

let id = 0
const slides = ref([
    { id: id++, src: "../../testimg/test1.jpg" },
    { id: id++, src: "../../testimg/test2.jpg" },
    { id: id++, src: "../../testimg/test3.jpg" },
    { id: id++, src: "../../testimg/test4.jpg" },
    { id: id++, src: "../../testimg/test5.jpg" },
    { id: id++, src: "../../testimg/test6.jpg" },
    { id: id++, src: "../../testimg/test7.jpg" },
    { id: id++, src: "../../testimg/test8.jpg" },
    { id: id++, src: "../../testimg/test9.jpg" },
    { id: id++, src: "../../testimg/test10.jpg" }]
)
const innerWidth = 2000
const singleWidth = 200
const currentIndex = ref(0)
const slidesInnerMarginLeft = computed(() => {
    return (200 - (currentIndex.value * singleWidth))
})
function goToPrev() {
    if (currentIndex.value === 0) {
        return
    } else {
        currentIndex.value--
    }

}
function goToNext() {
    if (currentIndex.value === 9) {
        return
    } else {
        currentIndex.value++
    }
}
</script>

<style scoped>
.slide-body {
    width: auto;
    height: auto;
}

.slides {
    width: 600px;
    height: 350px;
    text-align: center;
    position: relative;
    left: 33vw;
    top: 2vh;
    overflow: hidden;
}

.slides.inner {
    width: 2000px;
    transition: margin 0.4s ease-out;
    top: 0;
    left: 0;
}
.slide {
    display: inline-block;
}
.slide-img {
    max-width: 100%;
}
.nav.number.active{
    color:#7777ff !important;
    transition : 0.4s
}
.nav.number {
    display: inline-block;
    color: #9f9f9f;
    scale: calc(0.8);
}
.nav.ul {
    display: inline-block;
    position: absolute;
    top : 55vh;
    left: 43vw;

}
.nav.button {
    position: absolute;
    top: 10vh;
}
.nav.button.next{
    right:5vw;
}
.nav.button.prev{
    left:8vw;
}
.nav-image{
    scale:calc(0.1)
}
</style>