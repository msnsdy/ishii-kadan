$(function () {
  AOS.init({
    duration: 2800,
    anchorPlacement: 'top-bottom',
  });

  $('.hamburger-icon').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
    $('.hamburger-box').toggleClass('is-open');
    $("body").toggleClass('fixed');
    return false;
  });

  if (window.document.body.id === 'top') {
    $(window).on('scroll', function() {
      if ($('.header-top').height() <
      $(this).scrollTop()) {
        let src = $('.header-logo-top').find('img').attr('src').replace('top', 'sub');
        for (var i=1; i<4; i++) {
          $('.hamburger-icon-bar' + i).addClass('is-black');
        };
        $('.header-top').addClass('is-black');
        $('.header-logo-top').find('img').attr('src', src);
      } else {
        let src = $('.header-logo-top').find('img').attr('src').replace('sub', 'top');
        for (var i=1; i<4; i++) {
          $('.hamburger-icon-bar' + i).removeClass('is-black');
        };
        $('.header-top').removeClass('is-black');
        $('.header-logo-top').find('img').attr('src', src);
      }
    })
  }

  /* flatpickr */
  $(".flatpickr").flatpickr({
    'locale': 'ja',
    mode: 'range',
    position: 'above',
    minDate: "today",
  });

  /* google form */
  let $form = $('#js-form')
  $form.submit(function (e) {
      $.ajax({
          url: $form.attr('action'),
          data: $form.serialize(),
          type: "POST",
          dataType: "xml",
          statusCode: {
              0: function () {
                  //送信に成功したときの処理
                  $form.slideUp();
                  $('#js-success').slideDown();
              },
              200: function () {
                  //送信に失敗したときの処理 
                  $form.slideUp();
                  $('#js-error').slideDown();
              }
          }
      });
      return false;
  });

  /* swiper */
  let mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true, // ループの指定
    effect: "fade", //フェードの指定
    autoplay: {
      delay: 4000, //４秒後に次のスライドへ
      disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
    },
    speed: 2000, //２秒かけてフェードで切り替わる
    allowTouchMove: false,//マウスでのスワイプを禁止
  });

  /* モーダルウィンドウ */
  $(".js-modal-open").click(function () {
    $(".modal-overlay, .modal").fadeIn();
    $("body").addClass("no-scroll"); // 背景固定させるクラス付与
  });

  $(".js-modal-close, .modal-overlay").click(function () {
    $("body").removeClass("no-scroll"); // 背景固定させるクラス削除
    $(".modal-overlay, .modal").fadeOut();
  });

  /* newsタブ */
  $(".news-tab li").click(function () {
    var index = $(".news-tab li").index(this);
    $(".news-tab li").removeClass("is-active");
    $(this).addClass("is-active");
    $(".news-area ul").removeClass("is-show").eq(index).addClass("is-show");
  })
})