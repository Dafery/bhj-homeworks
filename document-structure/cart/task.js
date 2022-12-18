'use strict';

const cart = document.querySelector('.cart');
const productItems = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

productItems.forEach((product) => {
  const productImage = product.querySelector('.product__image');
  const productQuantityValue = product.querySelector('.product__quantity-value');
  const productAdd = product.querySelector('.product__add');
  const productQuantityDec = product.querySelector('.product__quantity-control_dec');
  const productQuantityInc = product.querySelector('.product__quantity-control_inc');

  productAdd.addEventListener('click', () => {
    let cartProductsItems = [...cartProducts.querySelectorAll('.cart__product')];
    const cartProductsItem = cartProductsItems.find((el) => el.dataset.id === product.dataset.id);

    if (cartProductsItem) {
      const cartProductImage = cartProductsItem.querySelector('.cart__product-image');
      const cartProductCount = cartProductsItem.querySelector('.cart__product-count');
      cartProductCount.textContent = Number(cartProductCount.textContent) + Number(productQuantityValue.textContent);

      productImage.insertAdjacentHTML(
        'afterEnd',
        `<img class="product__image product__image-copy" src="${productImage.src}" style="position: absolute; margin-top: 60px; z-index: 100">`
      );

      const productImageCopy = product.querySelector('.product__image-copy');
      const { top: productTop, left: productLeft } = productImage.getBoundingClientRect();
      const { top: cartProductTop, left: cartProductLeft } = cartProductImage.getBoundingClientRect();

      const distanceY = -Math.abs(productTop - cartProductTop);
      const distanceX = Math.abs(productLeft - cartProductLeft);
      let stepY = 0;
      let stepX = 0;

      function moveImage() {
        stepY += distanceY / 40;
        stepX += distanceX / 40;

        if (stepY < distanceY) return productImageCopy.remove();

        productImageCopy.style.top = stepY + 'px';
        productImageCopy.style.left = stepX + 'px';

        requestAnimationFrame(moveImage);
      }

      requestAnimationFrame(moveImage);
    } else {
      cart.style.display = 'block';

      cartProducts.insertAdjacentHTML(
        'beforeEnd',
        `<div class="cart__product" data-id="${product.dataset.id}">
          <img class="cart__product-image" src="${productImage.src}">
          <div class="cart__product-count">${productQuantityValue.textContent}</div>
          <a href="#" class="cart__product-remove">&times;</a>
        </div>`
      );

      const cartProductRemove = cartProducts.lastChild.querySelector('.cart__product-remove');
      cartProductRemove.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.closest('.cart__product').remove();

        cartProductsItems = [...cartProducts.querySelectorAll('.cart__product')];
        if (!cartProductsItems.length) cart.style.display = 'none';
      });
    }
  });

  productQuantityDec.addEventListener('click', () => {
    if (+productQuantityValue.textContent > 1) +productQuantityValue.textContent--;
  });

  productQuantityInc.addEventListener('click', () => {
    +productQuantityValue.textContent++;
  });
});
