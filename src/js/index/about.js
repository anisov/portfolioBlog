let skillAllow =  document.querySelectorAll('.js-skill-allow')
if($('.promo').length){
    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled >= 400){
            for (let i = 0; i < skillAllow.length; i++){
                skillAllow[i].classList.remove("skill__circle--disable");
            }
        }
    }
}