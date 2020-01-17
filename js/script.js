document.addEventListener('DOMContentLoaded', ( ) => {

const search = document.querySelector('.search'),
cartBtn = document.getElementById('cart'),
wishlistBtn = document.getElementById('wishlist'),
goodsWrapper = document.querySelector('.goods-wrapper'),
cart = document.querySelector('.cart'),
category = document.querySelector('.category');

const loading = () => {
gooodsWrapper.innerHtml = `<div id="spinner"><div class="spinner-loading"><div><div><div></div>
</div><div><div></div></div><div><div></div></div><div><div></div></div></div></div></div>`;
};

const getGoods = (handler, filter) => {
    loading();
    fetch('.db/db.json')
    .then(response => response.json())
    .then(filter)
    .then(handler);
};


const createCardGoods = (id, title, price, img) => {
    const card = document.createElement('div');
    card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
    card.innerHTML = `<div class="card">
<div class="card-img-wrapper">
    <img class="card-img-top" src="${img}" alt="">
    <button class="card-add-wishlist" data-goods-id="${id}"></button>
</div>
<div class="card-body justify-content-between">
    <a href="#" class="card-title">${title}</a>
    <div class="card-price">${price}₽</div>
    <div>
        <button class="card-add-cart" data-goods-id="${id}">Добавить в корзину</button>
    </div>
</div>
</div>`;
return card;
};
goodsWrapper.appendChild(createCardGoods(1, "Phone", 50000, 'img/temp/Archer.jpg'));
goodsWrapper.appendChild(createCardGoods(1, "Phone", 50000, 'img/temp/Archer.jpg'));
goodsWrapper.appendChild(createCardGoods(1, "Phone", 50000, 'img/temp/Archer.jpg'));

const searchGoods = event => {
    event.preventDefault();
};
});
