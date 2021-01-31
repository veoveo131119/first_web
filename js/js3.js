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
    
    $("#icon-img1").click(function () { 
        $("#img1").show();
        $("#img2").hide();
        $("#img3").hide();
        $("#img4").hide();
    });
    $("#icon-img2").click(function () { 
        $("#img2").show();
        $("#img1").hide();
        $("#img3").hide();
        $("#img4").hide();
    });
    $("#icon-img3").click(function () { 
        $("#img3").show();
        $("#img2").hide();
        $("#img1").hide();
        $("#img4").hide();
    });
    $("#icon-img4").click(function () { 
        $("#img4").show();
        $("#img2").hide();
        $("#img3").hide();
        $("#img1").hide();
    });

    $("#show-more3").click(function () {
        $("#show-more3").hide();
        $(".early-hide3").slideDown();
    });
    $("#add").click(function () { 
        if($("#count").val() == '')
            x=0;
        var x =parseInt($("#count").val()) +1;
        $("#count").val(x);
        
    });
    $("#minus").click(function () { 
        if($("#count").val() == '')
            x=0;
        var x =parseInt($("#count").val()) -1;
            if ( x<0  )
            {
                x=0;
            }
        $("#count").val(x);
        
    });
    $("#show-show").click(function () { 
        $("#more-des").show();
        $("#show-show").hide();
        
    });
    
    $("#hotc5").click(function () {
        $("#hots5").slideToggle(1000, function () {
            
        });

    });
});