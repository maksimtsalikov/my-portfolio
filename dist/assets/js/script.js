const hamburger = document.querySelector('.promo__hamburger'),
      menu = document.querySelector('.promo__menu'),
      close = document.querySelector('.promo__menu-block-close');

        hamburger.addEventListener('click', () => {
            menu.classList.add('active');
        });

        close.addEventListener('click', () => {
            menu.classList.remove('active');
        });

        
const process = document.querySelectorAll('.skills__rating-items-head-process'),
      lines = document.querySelectorAll('.skills__rating-items-line--orange span');

    process.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

const menuLink = document.querySelector('.promo__menu-block-link');

        menuLink.addEventListener('click', () => {
            menu.classList.remove('active');
        });