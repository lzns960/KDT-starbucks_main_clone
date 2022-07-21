// SUBMENU > SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl =  searchEl.querySelector("input");

searchEl.addEventListener("click", function(){
    searchInputEl.focus();
})
searchInputEl.addEventListener("focus", function(){
    searchInputEl.setAttribute("placeholder", "통합 검색");
})

//포커스의 반대되는 이벤트 blur
searchInputEl.addEventListener("blur", function(){
    searchInputEl.setAttribute("placeholder", "");
})

//SWIPER
//NOTICE >> SWIPER
const swiperNotice = new Swiper (".notice .notice_line .swiper", {
    direction: "vertical", //문자열 형식으로 줘야 한다. 방향
    loop: true, 
    autoplay: true, 
})

//PROMOTION >> SWIPER
// SWIPER PROMOTION
const swiperPromotion = new Swiper(".promotion .swiper", {
    direction: "horizontal", // 기본 값: 수평
    slidesPerView: 3, // 한번에 보여줄
    spaceBetween: 10, // 아이템간 거리
    centeredSlides: true, // 슬라이드 센터 여부
    loop: true, // 루프 여브
    autoplay: {// 자동 재생, 변경 시간 설정
        delay: 5000, // 1000이 1초 
        disableOnInteraction: false, //클릭하고 왔다갔다하는 액션을 끄게하는 것 (원래 swiper의 기능)
    },
    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true, 
    },
    navigation: {
        prevEl: ".promotion .swiper-button-prev",
        nextEl: ".promotion .swiper-button-next",
    } 
});

//SWIPER PROMOTION CONTROL AUTOPLAY 
function controlAutoplay() {
    if(swiperPromotion.autoplay.running === ture) {
        //autoplay가 실행중인지 아닌지 true 돌아가는 거, false 멈춘 것  컨디션에 따라 autoplay를 걸어준다. 
        swiperPromotion.autoplay.stop();
    } else {
        swiperPromotion.autoplay.start();
    }
}

//TOGGLE PROMOTION 
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn  = document.querySelector(".toggle-promotion");
const promotionToggleIcon = document.querySelector(".toggle-promotion span");

promotionToggleBtn.addEventListener("click", function(){
    if(promotionEl.classList.contains("hide")){
        promotionEl.classList.remove("hide");
    }else {
        promotionEl.classList.add("hide");
    }

    if(promotionToggleIcon.style.transform === "rotate(180deg)") {
        promotionToggleIcon.style.transform = "rotate(0deg)";
    }else {
        promotionToggleIcon.style.transform = "rotate(180deg)";
    }
})
//SCROLL ANIMATION 
let scrollYpos;
window.addEventListener("scroll", function () {
    scrollYpos = window.scrollY; //스크롤정보 가져오기
    console.log(scrollYpos);

    if (scrollYpos > 300) {
        const peruAnimate = document.querySelector(".peru");
        peruAnimate.classList.add("animate");
    }
    if (scrollYpos > 1000) {
        document.querySelector(".indonesia").classList.add("animate");
    }
    if (scrollYpos > 1300) {
        document.querySelector(".favorite").classList.add("animate");
    }
    if (scrollYpos > 2100) {
        document.querySelector(".magazine").classList.add("animate");
    }
    if (scrollYpos > 2500) {
        document.querySelector(".store").classList.add("animate");
    }
})

window.onload = () => {
    const visualInner = document.querySelector(".visual .inner");
    visualInner.classList.add("animate");
};

