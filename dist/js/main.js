// slider

$('.works__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    arrows: true,
    nextArrow: '<div class="works__icon works__icon--right material-icons-keyboard_arrow_right"> </div>',
    prevArrow: '<div class="works__icon works__icon--left material-icons-keyboard_arrow_left"> </div>',

});

//skills

$(function () {
    $('#resume').on('click', function () {
        $('.resume').animate({
            top: "0"
        }, 1000);

        $('.skills__value--photo').animate({
            width: "30%"
        }, 1500)

        $(function () {
            $('.skills__value--corel').animate({
                width: "30%"
            }, 1500)
        })
        $(function () {
            $('.skills__value--html').animate({
                width: "80%"
            }, 1500)
        })
        $(function () {
            $('.skills__value--sass').animate({
                width: "50%"
            }, 1500)
        })
        $(function () {
            $('.skills__value--java').animate({
                width: "50%"
            }, 1500)
        })
        $(function () {
            $('.skills__value--en').animate({
                width: "50%"
            }, 1500)
        })
        $(function () {
            $('.skills__value--pl').animate({
                width: "70%"
            }, 1500)
        })
    })


})
$(function () {
    $('.home__icon').on('click', function () {
        $('.resume').animate({
            top: "-150%"
        }, 1000)

        $('.contact').animate({
            top: "-150%"
        }, 1000)

        $('.works').animate({
            top: "-150%"
        }, 1000)

        $('.skills__value--photo').animate({
            width: "0"
        }, 1500)

        $(function () {
            $('.skills__value--corel').animate({
                width: "0"
            }, 1500)
        })
        $(function () {
            $('.skills__value--html').animate({
                width: "0"
            }, 1500)
        })
        $(function () {
            $('.skills__value--sass').animate({
                width: "0"
            }, 1500)
        })
        $(function () {
            $('.skills__value--java').animate({
                width: "0"
            }, 1500)
        })
        $(function () {
            $('.skills__value--en').animate({
                width: "0"
            }, 1500)
        })
        $(function () {
            $('.skills__value--pl').animate({
                width: "0"
            }, 1500)
        })
    })
})

$(function () {
    $('#contact').on('click', function () {
        $('.contact').animate({
            top: "0"
        }, 1000);
    })

})

$(function () {
    $('#portfolio').on('click', function () {
        $('.works').animate({
            top: "0"
        }, 1000);
    })

})