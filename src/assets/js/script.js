const hamburger = document.querySelector('.promo__hamburger'),
        menu = document.querySelector('.promo__menu'),
        close = document.querySelector('.promo__menu-block-close');

        hamburger.addEventListener('click', () => {
            menu.classList.add('active');
        });

        close.addEventListener('click', () => {
            menu.classList.remove('active');
        });