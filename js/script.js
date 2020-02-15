$(document).ready(function(){

    
    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
    });

    $(".nav-close").click(function(){
        $(".full-nav").removeClass("open");
    });

    $(window).scroll(function(){
        var sc = $(window).scrollTop();
        if(sc > 100){
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky");
    }
    });    
            
    $('.bxslider').bxSlider({
        mode:'horizontal',
        moveSlides:1,
        slideMargin: 40,
        infiniteLoop:true,
        minSlides:1,
        maxSlides:1,
        speed:1200,
        responsive:true,
        breakpoints:{
            500:{
                auto:true,
            }
        }
        
    });

    

    if($(".swiper-container").hasClass("team-member-slider")){
        var swiper = new Swiper('.swiper-container',{
            slidesPerView:3,
            allowTouchMove: true,
            loop:true,
            centeredSlides:true,
            effect:"coverflow",
            grabcursor:true,
            autoplay:false,
            navigation:{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
            },
            coverflow:{
                rotate:0,
                stretch:100,
                depth:200,
                modifier:1,
                slideShadows:false
            },
            breakpoints:{
                767: {
                    slidesPerView:1,                    
                    centeredSlides:false,
                    effect:"slide",
                }
            }
        });
    }

    $("#work").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });   
    
    $('.countdown').counterUp({
        delay:10,
        time:1000
    })

});

$(function(){

    $("#clients-list").owlCarousel({
        items:6,
        autoplay:false,
        smartSpeed:700,
        loop:true,
        autoPlayHoverPause:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            400:{
                items:400
            },
            768:{
                items:6
            }
        }
        
    })   
   
});

$(function(){
    'use strict'

    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('.carousel').carousel({
        touch: true // default
        });

    $('ul.filters > li').on('click',function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});
    });

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top':'-100%'})
        $(this).find('.card-hover').css({'top':'0'})
    });

    $('.card').mouseleave(function(){

        $(this).find('.card-overlay').css({'top':'0'})
        $(this).find('.card-hover').css({'top':'100%'})
    });
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    /*const navLinks = document.querySelectorAll('.nav-links li');*/

    burger.addEventListener('click',function() {
        nav.classList.toggle('nav-active')
    });
}

navSlide();

window.onscroll = function() {myFunction()};

var navbar = document.getElementsByClassName("nav3");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the na
function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }