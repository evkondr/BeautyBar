var humb=document.querySelector(".hamburger");
var menu=document.querySelector("nav");
var wrap=document.querySelector(".wrap");
function moveNav(){
    humb.classList.toggle("is-active");
    wrap.classList.toggle("wrap-slided");
    menu.classList.toggle("nav-activeted");
}

wrap.onclick=function(e){
    if(this.getAttribute("class")=="wrap wrap-slided"){
        humb.onclick=moveNav();
    }else{
        humb.onclick=moveNav;
    }
    
    /*if(menu.getAttribute("class")=="nav-activeted"){
        humb.onclick=moveNav();
    }*/ 
    console.log(this);
}
/*wrap.addEventListener("click",function(e){ 
    if(menu.getAttribute("class")=="nav-activeted"){
        moveNav();
    }
});*/

$('.post').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true
});