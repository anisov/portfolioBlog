if ($('.js-take-news').length){
    const $news = $('.js-take-news'),
        $item = $('.js-take-menuItem'),
        $menu = $('.js-take-menu');

    let positionArticle = [];
    
    let setPositionArticle = (element) => {
        const len = element.length;
        element.each(function(item) {
            positionArticle[item] = {};
            positionArticle[item].top = $(this).offset().top;
            positionArticle[item].bottom = positionArticle[item].top + $(this).innerHeight();
        });
    };
    
    let scrollPageFixMenu = (e) => {
        let scroll = window.pageYOffset;
        if (scroll < $news.offset().top) {
            $menu.removeClass('blog__list--fixed');
        } else {
            $menu.addClass('blog__list--fixed');
        }
    };

    let scrollPage  = (e) => {
        let scroll = window.pageYOffset;
        positionArticle.forEach( (element, index) => {
        if (scroll >= element.top && scroll <= element.bottom) {
            $item
                .eq(index)
                .children().addClass('blog__elem-link--current');
            $item
                .eq(index)
                .siblings()
                .children().removeClass('blog__elem-link--current')
            }
        });
    };
    
    let clickItem  = (e) => {
        let $element = $(e.currentTarget),
            $currentElement = $(e.target),
            index = $currentElement.parent().index(),
            sectionOffset = positionArticle[index].top;

        $(document).off('scroll', scrollPage);
        $element.siblings().children().removeClass('blog__elem-link--current');

        $('body, html').animate({
            scrollTop: sectionOffset
        },
        1000,

        () => {
            $element.children().addClass('blog__elem-link--current');
            $(document).on('scroll', scrollPage);
        }
        );
    }
    
    $item.on('click', clickItem);

    $(document).on('scroll', scrollPage);
    $(document).on('scroll', scrollPageFixMenu);

    $(window).on('load', function(e) {
        setPositionArticle($news);
    });

    $(window).on('resize', function(e) {
        setPositionArticle($news);
    });
}
    
    