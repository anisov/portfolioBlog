if (document.querySelector('.blog__left')){
    let buttonOpenBlog = document.querySelector('.js-blog-open'),
        blogLeft = document.querySelector('.blog__left');

    buttonOpenBlog.addEventListener('click', () => {
        blogLeft.classList.toggle("blog__left--active");
    })
}