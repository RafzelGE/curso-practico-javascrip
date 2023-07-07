const desktopMenu = document.querySelector('.desktop-menu');
const menu = document.querySelector('.menu');
const email = document.querySelector('.navEmail');
const mobileMenu = document.querySelector('.mobile-menu');
const navShopping = document.querySelector('.navShopping');
const asideShopping = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const asideInfo = document.querySelector('.product-detail-info');
const productDetailClose = document.querySelector('.product-detail-close');


navShopping.addEventListener('click', toggleShoppingCart);
email.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMobileMenu);
productDetailClose.addEventListener('click', closeDetail);
function closeDetail() {
    const isAsideInfoClosed = asideInfo.classList.contains('inactive');
    if (!isAsideInfoClosed) {
        asideInfo.classList.add('inactive');
    }
}   

function toggleMenu() {
    const isAsideClosed = asideShopping.classList.contains('inactive');
    const isAsideInfoClosed = asideInfo.classList.contains('inactive');

    if (!isAsideClosed) {
        asideShopping.classList.add('inactive');
    }
    if (!isAsideInfoClosed) {
        asideInfo.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = asideShopping.classList.contains('inactive');
    const isAsideInfoClosed = asideInfo.classList.contains('inactive');
    if (!isAsideClosed) {
        asideShopping.classList.add('inactive');
    }
    if (!isAsideInfoClosed) {
        asideInfo.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideInfoClosed = asideInfo.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isAsideInfoClosed) {
        asideInfo.classList.add('inactive')
    }
    asideShopping.classList.toggle('inactive');
}
function closeDetail() {
    const isAsideInfoClosed = asideInfo.classList.contains('inactive');
    if (!isAsideInfoClosed) {
        asideInfo.classList.add('inactive');
    }
}
const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'telefono',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'pantalla',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'teclado',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'raton',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
function renderProducts(array) {
    for (product of array) {
        
    const productCard = document.createElement('div');

    const productImg = document.createElement('img');

    const productInfo = document.createElement('div');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');

    const productName = document.createElement('p');

    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
        console.log(product);
        productCard.classList.add('product-card');

        productImg.setAttribute('src', product.img);

        productInfo.classList.add('product-info');


        productPrice.innerText = '$' + product.price;

        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        productImgCart.setAttribute('src', 'https://static.platzi.com/media/tmp/class-files/github/curso-frontend-developer-javascript-practico/curso-frontend-developer-javascript-practico-11c672c1facc262ea3c11ecc8d95e1f0b0e67a0b/icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

        productCard.addEventListener('click', openInfo);

        function openInfo() {
            const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
            const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
            const isAsideClosed = asideShopping.classList.contains('inactive');
            const isAsideInfoClosed = asideInfo.classList.contains('inactive');
    
            if (!isDesktopMenuClosed) {
                desktopMenu.classList.add('inactive')
            }
    
            if (!isMobileMenuClosed) {
                mobileMenu.classList.add('inactive');
            }
            if (!isAsideClosed) {
                asideShopping.classList.add('inactive')
            }
            if (!isAsideInfoClosed) {
                asideInfo.classList.add('inactive');
            }
            asideInfo.classList.remove('inactive');
        }
    }
}

renderProducts(productList)
