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