$(function () {
    $('.skills__value--photo').animate({
        width: "30%"
    }, 1500)
})
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

$(function () {
    $('#resume').on('click', function () {
        $('.resume').animate({
            top: "0"
        }, 1000)
    })
})
$(function () {
    $('.home__icon').on('click', function () {
        $('.resume').animate({
            top: "-150%"
        }, 1000)
    })
})