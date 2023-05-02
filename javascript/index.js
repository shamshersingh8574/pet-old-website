$(document).ready(function () {
    // $(".navbar_logo_icon").append('<i class="fa-solid fa-bars navIcon"></i>');

    $(".navIcon").click(function () {

        $(".navbar").toggle();
        
    })
    //   overflow hidden
    $(".navIcon").click(function () {
        $("body").toggleClass("main");
    });
})

$(document).ready(function () {

    // testimonial card
    $('.testmonial_main').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '33px',
        slidesToShow: 3,
        dots: true,
        speed: 1000,

        responsive: [
        {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                }
            }
        ]
    });




//   product area
    $('.product_card').slick({
        arrows: true,
        centerPadding: '33px',
        slidesToShow: 3,
        arrows: true,
        speed: 500,

        responsive: [
        {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                }
            }
        ]
    });



})