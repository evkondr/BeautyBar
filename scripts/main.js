var humb=document.querySelector(".hamburger");
var menu=document.querySelector("nav");
var wrap=document.querySelector(".wrap");
var c=document.getElementsByClassName("container");
function moveNav(){
    humb.classList.toggle("is-active");
    wrap.classList.toggle("wrap-slided");
    menu.classList.toggle("nav-activeted");
}
function closeNav(){
    if(menu.getAttribute("class")=="nav-activeted"){
        humb.classList.remove("is-active");
        wrap.classList.remove("wrap-slided");
        menu.classList.remove("nav-activeted");
    }
}
humb.addEventListener("click", moveNav);
for(var i=0;i<c.length;i++){
    c[i].addEventListener("click",closeNav);
}
window.addEventListener("scroll", closeNav);


$('.post').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true
});