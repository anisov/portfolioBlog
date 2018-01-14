// let height = document.querySelector('.promo').offsetHeight,
//     button = document.querySelector('.promo__down');
// var top = 0;
// function downMove() {
//   if(top < height) {
//     top = top + 3;
//     window.scrollBy(0,3);
//     setTimeout(downMove,1);
//   } else{
//     return false;
//   }
// }
// button.addEventListener('click', () =>{
//     top = 0;
//     downMove()
// })

if($('.promo').length){
let $heightDown =  $('.promo').innerHeight(),
    $buttonDown = $('.js-window-down');
    $buttonDown.click(() =>{
        $('body, html').animate({
            scrollTop: $heightDown
        }, 1000)
    })
}

if ($('.js-window-up').length) {
    let $buttonUp = $('.js-window-up');
    $buttonUp.click(() =>{
        $('body, html').animate({
            scrollTop: 0
        }, 1000)
    })
}