$(function () {

    $('.ddmenu li').mouseenter(function () {

        // 表示されているメニューを非表示(alideUp)にする
        $(this).siblings().children('ul').slideUp();

        // 自分の子供の要素を取得して。slideDownで表示する
        $(this).children().slideDown();
       
    })

    // 画面のどこかがクリックされたら
    $('html').click(function () {
     // メニューを非表示にする
     $('.ddmenu ul').slideUp();
    })
})

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    effect: "cube",

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 1500,
    },
})

$('#js-show-btn').click(function ()　{

  $('#newAlbum').fadeIn();

})