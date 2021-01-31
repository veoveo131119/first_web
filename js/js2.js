$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $("#show-more").click(function () {
        $("#show-more").hide();
        $(".early-hide").slideDown();
    });
    $("#show-more2").click(function () {
        $("#show-more2").hide();
        $(".early-hide2").slideDown();
    });

    $("#show-more3").click(function () {
        $("#show-more3").hide();
        $(".early-hide3").slideDown();
    });
    $("#hotcl").click(function () {
        $("#hots1").slideToggle(1000, function () {
            
        });

    });
    $("#hotc2").click(function () {
        $("#hots2").slideToggle(1000, function () {
            
        });

    });
    $("#hotc3").click(function () {
        $("#hots3").slideToggle(1000, function () {
            
        });

    });
    $("#hotc4").click(function () {
        $("#hots4").slideToggle(1000, function () {
            
        });

    });
});