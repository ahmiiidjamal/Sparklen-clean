let btnClick = document.getElementById("btn")
let showMenu = document.getElementById("list-ul")
let close = document.getElementById("btn-close")
btnClick.onclick = function(){
showMenu.style.cssText = "display:block;"
}
close.onclick = function(){
    showMenu.style.cssText = "display:none;"
}





// كشف العناصر عند التمرير
const scrollElements = document.querySelectorAll('.scroll-element');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight / dividend);
};

const displayScrollElement = (element) => {
    element.classList.add('scroll-visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.2)) {
            displayScrollElement(el);
        }
    });
};

// تشغيل الكود
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);
