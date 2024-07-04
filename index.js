window.location.href = "#";

const typewriterElement = document.querySelector('.contact-title');

function handleScroll() {
  const rect = typewriterElement.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
  if (isVisible) {
    typewriterElement.classList.add('contact-title-active');
  }
}

window.addEventListener('scroll', handleScroll);

$(".aboutus").hover(function(){
    $(".aboutusimg").css("background-image",'url("./images/aboutUsLit.png")');
    $(".aboutus p").css("margin","3% 0 0 4%");
},function (){
    $(".aboutusimg").css("background-image",'url("./images/about us.png")');
    $(".aboutus p").css("margin","2% 0 0 3%");
})

$(".introduction").hover(function(){
    $(".intro-design").css("opacity","25%");
},function (){
    $(".intro-design").css("opacity","10%");
})

$(".container-features").hover(function(){
    $(".whatwedo-title").css("opacity","100%");
},function (){
    $(".whatwedo-title").css("opacity","40%");
})

$(".team").hover(function(){
    $(".team-title").css("opacity","100%");
},function (){
    $(".team-title").css("opacity","40%");
})

$(".c1").hover(function(){
    $(".c1 img").css("opacity","40%");
    $(".c1 h1").css("display","block");
},function (){
    $(".c1 img").css("opacity","100%");
    $(".c1 h1").css("display","none");
})

$(".c2").hover(function(){
    $(".c2 img").css("opacity","40%");
    $(".c2 h1").css("display","block");
},function (){
    $(".c2 img").css("opacity","100%");
    $(".c2 h1").css("display","none");
})

$(".c3").hover(function(){
    $(".c3 img").css("opacity","40%");
    $(".c3 h1").css("display","block");
},function (){
    $(".c3 img").css("opacity","100%");
    $(".c3 h1").css("display","none");
})

$(".c4").hover(function(){
    $(".c4 img").css("opacity","40%");
    $(".c4 h1").css("display","block");
},function (){
    $(".c4 img").css("opacity","100%");
    $(".c4 h1").css("display","none");
})

$(".c5").hover(function(){
    $(".c5 img").css("opacity","40%");
    $(".c5 h1").css("display","block");
},function (){
    $(".c5 img").css("opacity","100%");
    $(".c5 h1").css("display","none");
})

$("#nav-about").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.aboutus').offset().top
      }, 'slow');
})

$("#nav-what").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.whatwedo').offset().top
      }, 'slow');
})

$("#nav-team").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.team').offset().top
      }, 'slow');
})

$("#nav-contact").click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.contact').offset().top
      }, 'slow');
})


