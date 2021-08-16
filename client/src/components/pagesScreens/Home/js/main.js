import $ from "jquery";

(function() {
    var bgImage = null;
var lastImgIndex = 0;
var introSliderTimer;
var introTime;
var autoPlayFlag = false;
var linkIndex = 0;
var aboutOwl;
var screenWidth;
var hardwareOwl;
var menuToggle = false;
var serviceFlag = false;
$(document).ready(function() {
    menuBtn();
    setPieces();
    adsSlider();
    $("#introSliders .slider.active .caption").addClass("animate__fadeInUp");

    setTimeout(() => {
        getActiveImg();
        startAutoPlay();
        $('#servicesCarousel').carousel('pause');

    }, 450);
    introTime = $("#introSliders").attr("timer");
    $("#introSlidersPagers").on('click', '.pager', function() {
        stopAutoPlay();
        var newSliderIndex = $(this).index();
        changeIntroSlider(newSliderIndex);
    });

    var urlParams = new URLSearchParams(window.location.search);
    console.log();
    linkIndex = urlParams.get('cuurent') ? parseInt(urlParams.get('cuurent')) : 0;
    changeIndexPage(linkIndex);

    $("#navpoints").on('click', 'a', function() {
        linkIndex = $(this).index();
        console.log(linkIndex);
        changeIndexPage(linkIndex);
    });

    $("#servicesCarousel .carousel-item .minContent").append("<div class='lines'><span></span><span></span><span></span></div>")
    serviceSlider();
    aboutOwl = $("#about-slider").owlCarousel({
        autoplay: false,
        autoplayHoverPause: true,
        pagination: false,
        navigationText: false,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            }
        }
    });
    posPackageOwl();
    seoOwl();
    screenWidth = $(window).width();
    console.log(screenWidth);
    if (screenWidth < 768) {
        smallAboutSlider()
    } else {
        bigAboutSlider();
    }
    $(window).resize(function() {
        screenWidth = $(window).width();
        console.log(screenWidth);
        if (screenWidth < 768) {
            smallAboutSlider()
        } else {
            bigAboutSlider();
        }
    });
});

function getActiveImg() {

    bgImage = $('#introSliders .slider.active img').attr("src");

    $("#introSliders .slider.active .imgPiece").css({ 'background-image': 'url(' + bgImage + ')' });
    $("#introSliders .slider.active .imgPiece").removeClass("eq0");
    $("#introSliders .slider.active .imgPiece").addClass("eq1");
    $("#introSliders .slider.active .arrow").addClass("active");


}

function setPieces() {
    // var num=4;
    // var step=100/4;
    var myDivs = $("#introSliders .slider .myImg");
    myDivs.append('<div  class="row"></div>');

    for (let i = 0; i < 36; i++) {
        $("#introSliders .slider .row").append('<div class="col col-2"><div class="imgPiece eq0"></div></div>');
    }
}

function changeIntroSlider(newSlider) {

    if (newSlider == $("#introSliders .slider").length) newSlider = 0;
    if (newSlider != lastImgIndex) {
        $("#introSliders .slider.active .imgPiece").css({ 'background-image': 'url(' + bgImage + ')' });
        $("#introSliders .slider.active .myImg").css('background-image', 'none');
        $("#introSliders .slider.active .imgPiece").removeClass("eq1");
        $("#introSliders .slider.active .imgPiece").addClass("eq0");
        $("#introSliders .slider.active .caption").removeClass("animate__fadeInUp");
        $("#introSliders .slider.active .caption").addClass("animate__fadeOutDown");
        $("#introSliders .slider.active .arrow").removeClass("active");
        $("#introSlidersPagers .pager").removeClass("active");
        $('#introSlidersPagers .pager').eq(newSlider).addClass("active");

        setTimeout(() => {
            $("#introSliders .slider").removeClass("active");
            $("#introSliders .slider").eq(newSlider).addClass("active");
            $("#introSliders .slider.active .caption").removeClass("animate__fadeOutDown");
            $("#introSliders .slider.active .caption").addClass("animate__fadeInUp");

        }, 400);
        setTimeout(() => {
            getActiveImg();

        }, 450);
        lastImgIndex = newSlider;
    }
}

function startAutoPlay() {
    introSliderTimer = setInterval(function() {
        changeIntroSlider(lastImgIndex + 1);
    }, introTime);
}

function stopAutoPlay() {
    clearInterval(introSliderTimer);
    // setTimeout(startAutoPlay, 800);
}

function clickNext() {
    linkIndex = linkIndex + 1;
    changeIndexPage(linkIndex);
}

function clickPrev() {
    linkIndex = linkIndex - 1;
    changeIndexPage(linkIndex);
}

function changeLogo(index) {
    if (linkIndex == 1) {

        setTimeout(() => {
            $('#navpoints p').removeClass('mainColor');
            $('#navpoints p').addClass('whiteColor');
            $('#nextButton,#prevButton').removeClass('mainColor');
            $('#nextButton,#prevButton').addClass('whiteColor');
            $('#servicesCarousel').carousel('cycle');
            // $('#servicesCarousel').carousel('pause');
        }, 600);

    } else {
        setTimeout(() => {
            $('#nextButton,#prevButton').addClass('mainColor');
            $('#nextButton,#prevButton').removeClass('whiteColor');
            $('#navpoints p').addClass('mainColor');
            $('#navpoints p').removeClass('whiteColor');
            $('#servicesCarousel').carousel('pause');
        }, 600);

    }
    // next button 
    if (linkIndex == 3) {
        $('#nextButton').addClass('d-none');
    } else {
        $('#nextButton').removeClass('d-none');
    }
    if (linkIndex == 0) {
        $('#prevButton').addClass('d-none');

    } else {
        $('#prevButton').removeClass('d-none');
        // reset();
    }
}

function bigAboutSlider() {
    bigAboutActive();
    aboutOwl.on('changed.owl.carousel', function(e) {
        if (screenWidth < 768) {
            smallAboutActive();
        } else {
            bigAboutActive();
        }
    });
    clickAboutSlider();
}

function smallAboutSlider() {
    smallAboutActive();
    aboutOwl.on('changed.owl.carousel', function(e) {
        if (screenWidth < 768) {
            smallAboutActive();
        } else {
            bigAboutActive();
        }
    });
}

function bigAboutActive() {
    console.log($('#about-slider .owl-item.active').eq(1))
    $('#about-slider .owl-item').removeClass('slideActive');
    setTimeout(() => {
        $('#about-slider .owl-item.active').eq(1).addClass('slideActive');
    }, 100);
}

function smallAboutActive() {
    console.log($('#about-slider .owl-item.active').eq(0))
    $('#about-slider .owl-item').removeClass('slideActive');
    setTimeout(() => {
        $('#about-slider .owl-item.active').eq(0).addClass('slideActive');
    }, 100);
}

function clickAboutSlider() {
    $("#about-slider .owl-item").on('click', function() {
        console.log($(this).index());
        console.log($("#about-slider .slideActive").index());
        if ($(this).index() > $("#about-slider .slideActive").index()) {
            aboutOwl.trigger('next.owl.carousel', [300]);
        }
        if ($(this).index() < $("#about-slider .slideActive").index()) {
            aboutOwl.trigger('prev.owl.carousel', [300]);
        }
    });

}

function posPackageOwl() {
    hardwareOwl = $('#hardware-slider').owlCarousel({
        autoplay: false,
        autoplayHoverPause: true,
        loop: true,

        pagination: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            }
        }
    });
    posPackageOwlActive();
    hardwareOwl.on('changed.owl.carousel', function(e) {
        posPackageOwlActive();
    });;
}

function posPackageOwlActive() {
    console.log($('#hardware-slider .owl-item.active').eq(1))
    $('#hardware-slider .owl-item').removeClass('slideActive');
    setTimeout(() => {
        $('#hardware-slider .owl-item.active').eq(1).addClass('slideActive');
    }, 100);
}

function seoOwl() {
    hardwareOwl = $('#seo-slider').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        pagination: true,
        // navigationText: ['<img class="arrowIcon" src="./img/blueAr.png" />', '<img class="arrowIcon" src="./img/blueAr.png" />'],

        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            }
        }
    });
    seoOwlActive();
    hardwareOwl.on('changed.owl.carousel', function(e) {
        seoOwlActive();
    });;
}

function seoOwlActive() {
    console.log($('#seo-slider .owl-item.active').eq(1))
    $('#seo-slider .owl-item').removeClass('slideActive');
    setTimeout(() => {
        $('#seo-slider .owl-item.active').eq(1).addClass('slideActive');
    }, 100);
}

function serviceSlider() {
    $('#servicesCarousel .carousel-control-prev').addClass('disabled');
    $('#servicesCarousel .carousel-control-next').addClass('activeOnly');
    $('#servicesCarousel').on('slid.bs.carousel', function(e) {
        $('#servicesCarousel .carousel-control-prev').removeClass('disabled');
        $('#servicesCarousel .carousel-control-next').removeClass('disabled');
        $('#servicesCarousel .carousel-control-next').removeClass('activeOnly');
        $('#servicesCarousel .carousel-control-prev').removeClass('activeOnly');

        if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
            $('#servicesCarousel').carousel('pause');
            $('#servicesCarousel .carousel-control-next').addClass('disabled');
            $('#servicesCarousel .carousel-control-prev').addClass('activeOnly');

        }
        if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
            $('#servicesCarousel').carousel('cycle');
            $('#servicesCarousel .carousel-control-prev').addClass('disabled');
            $('#servicesCarousel .carousel-control-next').addClass('activeOnly');

        }
    });
}

function menuBtn() {
    $('.menuBtn').on('click', function() {
        menuToggling();
    });
}

function menuToggling() {
    serviceFlag = false;
    if (menuToggle == false) {
        $('.menuBtn').addClass('open');
        $('#menu').addClass('open');
        menuToggle = true;
    } else {
        $('.menuBtn').removeClass('open');
        $('#menu').removeClass('open');
        menuToggle = false;
    }
}

function homePage(param) {
    if (window.location.href.indexOf("index") > -1) {
        linkIndex = param;
        if (param != 1) {
            changeIndexPage(param);
            menuToggling();
        } else {
            touchDevice(param);
        }
    } else {
        // change link 
        window.location.href = "./index.html?cuurent=" + param;
    }
}

function touchDevice(param) {
    console.log('check taouch');
    if (!!('ontouchstart' in window)) { //check for touch device
        //behaviour and events for touch device
        console.log('touch');
        if (serviceFlag == true) {
            changeIndexPage(param);
            menuToggling();
            serviceFlag = false;
        } else {
            serviceFlag = true;
        }
    } else {
        console.log('not touch');
        changeIndexPage(param);
        menuToggling();
    }
}

function changeIndexPage(param) {
    changeLogo(param);
    $("#navpoints a").removeClass('active');
    $("#navpoints a").eq(param).addClass('active');
    $(".page").removeClass('current');
    $(".page").eq(param).addClass('current');
}

function adsSlider() {
    var adsSliderTime;
    var carousel = $(".adsSlider .adsCarousel"),
        items = $(".adsSlider .item"),
        currdeg = 0;

    $(".adsSlider .next").on("click", { d: "n" }, rotate);
    $(".adsSlider .prev").on("click", { d: "p" }, rotate);

    function rotate(e) {
        clearInterval(adsSliderTime);
        if (e.data.d == "n") {
            currdeg = currdeg - 120;
            console.log(currdeg);
        }
        if (e.data.d == "p") {
            currdeg = currdeg + 120;
            console.log(currdeg);
        }
        carousel.css({
            "-webkit-transform": "rotateY(" + currdeg + "deg)",
            "-moz-transform": "rotateY(" + currdeg + "deg)",
            "-o-transform": "rotateY(" + currdeg + "deg)",
            "transform": "rotateY(" + currdeg + "deg)"
        });
        items.css({
            "-webkit-transform": "rotateY(" + (-currdeg) + "deg)",
            "-moz-transform": "rotateY(" + (-currdeg) + "deg)",
            "-o-transform": "rotateY(" + (-currdeg) + "deg)",
            "transform": "rotateY(" + (-currdeg) + "deg)"
        });
    }


    adsSliderTime = setInterval(function() {
        currdeg = currdeg - 120;
        console.log(currdeg);
        carousel.css({
            "-webkit-transform": "rotateY(" + currdeg + "deg)",
            "-moz-transform": "rotateY(" + currdeg + "deg)",
            "-o-transform": "rotateY(" + currdeg + "deg)",
            "transform": "rotateY(" + currdeg + "deg)"
        });
        items.css({
            "-webkit-transform": "rotateY(" + (-currdeg) + "deg)",
            "-moz-transform": "rotateY(" + (-currdeg) + "deg)",
            "-o-transform": "rotateY(" + (-currdeg) + "deg)",
            "transform": "rotateY(" + (-currdeg) + "deg)"
        });
    }, 5000);



}
})()