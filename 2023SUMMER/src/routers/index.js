import { createWebHistory,createRouter } from "vue-router";

const routes = [{
    path : "/login",  //로그인 경로
    name : "login", //이름
    component : () => import('../views/login') //파일 위치
}
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export {router}