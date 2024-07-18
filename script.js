(function createListener() {

    const body = document.querySelector('body');
    body.addEventListener('click', (event) => {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('get-feedback-popup')) {
            openFeedbackPopup();
        };
        if (clickedElement.classList.contains('not-ready')) {
            openSectionInDevelopmentPopup();
        };
        if (clickedElement.classList.contains('price__nav-item')) {
            showPrice(clickedElement);
        };

    });

    const menuItemCollection = document.querySelectorAll('.menu__item-with-hide-menu');
    const menuItemArray = Array.from(menuItemCollection);
    body.addEventListener('click', hideMenu);
    menuItemArray.forEach( item => {
        item.addEventListener('click', function() {
            showMenu(this);
        });
    });


}) ();

function showMenu(blok) {
    const popupMenu = blok.querySelector('.menu__popup-wrap');
    const underline = blok.querySelector('.menu__item-underline');

    setTimeout(function() {
        popupMenu.classList.remove('hidden');
        underline.classList.remove('hidden');
    }, 0);
};

function hideMenu() {
    const allPopupMenuCollection = document.querySelectorAll('.menu__popup-wrap');
    allPopupMenuArray = Array.from(allPopupMenuCollection);
    allPopupMenuArray.forEach( menu => menu.classList.add('hidden') );

    const allUnderlineCollection = document.querySelectorAll('.menu__item-underline');
    allUnderlineArray = Array.from(allUnderlineCollection);
    allUnderlineArray.forEach( underline => underline.classList.add('hidden') );
};

function openFeedbackPopup() {
    const feedbackForm = document.querySelector('.feedback-form__gag-wrap');
    const btnCloseFeedbackForm = document.querySelector('.feedback-form__close-wrap');
    feedbackForm.classList.remove('hidden');
    btnCloseFeedbackForm.addEventListener('click', (e) => {
        feedbackForm.classList.add('hidden');
    });

    
    feedbackForm.addEventListener('wheel', (e) => {
        e.preventDefault();
    });
};

function openSectionInDevelopmentPopup() {
    const popup = document.querySelector('.section-in-development');
    const btnClosePopup = document.querySelector('.section-in-development__close-wrap');
    popup.classList.remove('hidden');
    btnClosePopup.addEventListener('click', (e) => {
        popup.classList.add('hidden');
    });



    popup.addEventListener('wheel', (e) => {
        e.preventDefault();
    });
};

function showPrice(clickedElement) {
    highlightPriceButton(clickedElement);
    fillDataPrice(clickedElement);
};

function highlightPriceButton(clickedElement) {
    
    const active = document.querySelector('.price__nav-item_active');
    if (active) {
        active.classList.remove('price__nav-item_active');
    };
    
    clickedElement.classList.add('price__nav-item_active');
};

function fillDataPrice(clickedElement) {
    
    const tons = clickedElement.dataset.tons;
    const dataCar = priceBase.find( item => item.tons == tons);

    
    const imgCar = document.querySelector('.price__img');
    imgCar.setAttribute( 'src', `../img/${dataCar.src}` );

    
    const long = document.querySelector('.price__long');
    const volume = document.querySelector('.price__volume');
    const capacity = document.querySelector('.price__capacity');
    const price = document.querySelector('.price__price');

    long.innerHTML = dataCar.long;
    volume.innerHTML = dataCar.volume;
    capacity.innerHTML = dataCar.capacity;
    price.innerHTML = dataCar.price;

    
    const modelsPlace = document.querySelector('.price__models');
    modelsPlace.innerHTML = '';
    dataCar.models.forEach(element => {
        const model = `${element}`;
        const span = createItemCarModel();
        span.innerHTML = model;
        modelsPlace.appendChild(span);
    });
};

function createItemCarModel() {
    const span = document.createElement('span');
    span.classList.add('price__models-text');
    span.classList.add('font-MyriadPro');
    return span;
};

const priceBase = [
    {   tons: 1.5,
        src: '1,5tons.png',
        models: ['Toyota', 'Isuzu', 'Kia', 'Mitsubishi'],
        long: 'From 3 м. to 5 м',
        volume: 'From 5 to 7 cubic meters',
        capacity: 'From 1T to 2T..',
        price: 'Ksh.300.00./км',
    },
    {   tons: 3,
        src: '3tons.png',
        models: ['Toyota', 'Isuzu', 'Kia', 'Mitsubishi', 'Hino'],
        long: 'From 5 м. to 7 м',
        volume: 'From 7 to 10 cubic meters',
        capacity: 'From 4T to 6T.',
        price: 'Ksh.400.00./км',
    },
    {   tons: 5,
        src: '5tons.png',
        models: ['Tata', 'Isuzu', 'Kia', 'Mitsubishi'],
        long: 'From 7 м. to 9 м',
        volume: 'From 10 to 20 cubic meters',
        capacity: 'From 7T to 10T.',
        price: 'Ksh.500.00./км',
    },
    {   tons: 10,
        src: '10tons.png',
        models: ['Hino', 'Volvo', 'Tata', 'Isuzu'],
        long: 'From 10 м. to 12 м',
        volume: 'From 15 to 20 cubic meters',
        capacity: 'From 10T to 15T.',
        price: 'Ksh.600.00./км./км',
    },
    {   tons: 20,
        src: '20tons.png',
        models: ['Hino', 'Volvo', 'Scania', 'Isuzu'],
        long: 'From 12 м. to 18 м',
        volume: 'From 18 to 30 cubic meters.',
        capacity: 'From 15T to 20T.',
        price: 'Ksh.700.00./км',
    },
];



