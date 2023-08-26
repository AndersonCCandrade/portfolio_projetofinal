const botaoMenu = document.querySelector('.button__menu');
const menuMobile = document.querySelector('.menu__mobile');



let isMenuMobileOpen = false //Se false o menu está fechado....Se true o menu esta aberto 

botaoMenu.addEventListener('click', () => {
    isMenuMobileOpen ? menuMobile.classList.add('invisivel') : menuMobile.classList.remove('invisivel');
   
    isMenuMobileOpen ? botaoMenu.children[0].setAttribute('src', './assets/menu.svg'): botaoMenu.children[0].setAttribute('src', './assets/menuclose.svg');

    isMenuMobileOpen = !isMenuMobileOpen;
})
