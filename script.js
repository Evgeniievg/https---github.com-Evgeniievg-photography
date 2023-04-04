const scrollingElements = document.querySelectorAll('.scrolling-element');

window.addEventListener('scroll', function() {
    scrollingElements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });

});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (
        rect.top <= windowHeight - 300
    );
}

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.header__list')

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  menu.classList.toggle('popup')
});
