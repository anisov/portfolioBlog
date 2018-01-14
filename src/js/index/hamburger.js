if (document.querySelector('.js-open-menu')){
    const hamMenu = document.querySelector('.js-open-menu'),
    button = document.querySelector('.js-add-active'),
    menu = hamMenu.querySelector('.js-opacity-change'),
    left = hamMenu.querySelector('.hamburger__left'),
    right = hamMenu.querySelector('.hamburger__right');

    let flag = true
    button.addEventListener('click', () => {
        function toggleAnimation(){
            right.classList.toggle("hamburger__right--active")
            left.classList.toggle("hamburger__left--active");
        }
        function toggleAnimationBack(){
            left.classList.toggle("hamburger__left--back");
            right.classList.toggle("hamburger__right--back"); 
        }

        if (flag){
            flag=false
            if (hamMenu.classList.contains('hamburger--visable')){
                button.classList.toggle("ham-button--active");
                setTimeout(() => {
                    hamMenu.classList.remove('hamburger--visable')
                    toggleAnimationBack()
                    flag = true
                }, 1300);
                toggleAnimationBack()
                toggleAnimation()
                document.body.style.overflow = 'inherit';
            }else{
                hamMenu.classList.add('hamburger--visable');
                button.classList.toggle("ham-button--active");
                toggleAnimation()
                setTimeout(()=>{
                    flag = true
                },1300)
                document.body.style.overflow = 'hidden';
            }
            setTimeout(() => {
                menu.classList.toggle('hamburger__menu--active')
            }, 50);
        }
    });
}