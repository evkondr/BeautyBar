var humb=document.querySelector(".hamburger");
var menu=document.querySelector("nav");
var wrap=document.querySelector(".wrap");
humb.onclick=function(){
    this.classList.toggle("is-active");
    wrap.classList.toggle("wrap-slided");
    menu.classList.toggle("nav-activeted");
}

$('.post').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true
});