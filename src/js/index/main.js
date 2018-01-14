if (document.querySelectorAll('.js-change-side')){
    let changeSides = document.querySelectorAll('.js-change-side');
    let linkAuth = document.querySelectorAll('.js-click-change');
    let changeFront = document.querySelector('.js-change-front')
    for(let i=0;i < linkAuth.length;i++){
        linkAuth[i].addEventListener('click', e =>{
            e.preventDefault();
            for(let i=0;i < changeSides.length;i++){
                if (changeSides[i].classList.contains('entry--back-side') === false){
                    changeSides[i].classList.add('entry--back-side');
                } else {
                    changeSides[i].classList.remove('entry--back-side');
                }
            }
            if (linkAuth[0].classList.contains('welcome__auth--back-side') === false){
                linkAuth[0].classList.add('welcome__auth--back-side');
            } else {
                linkAuth[0].classList.remove('welcome__auth--back-side');
            }  
        })
    }
}