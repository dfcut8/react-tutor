

const productsRoot = document.querySelector(".js-products-grid");

products.forEach(p => {
  productsRoot.innerHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${p.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${p.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${p.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${p.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(p.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button
            class="js-add-to-cart-button add-to-cart-button button-primary"
            data-product-id="${p.id}">
            Add to Cart
          </button>
        </div>`
})

document.querySelectorAll(".js-add-to-cart-button").forEach(b => {
  b.addEventListener("click", () => {

    let product = getProductById(b.dataset.productId);
    if (product) {
      product.quantity++;
    } else {
      cart.push({ productId: b.dataset.productId, quantity: 1 });
    }
    console.log(cart);
  });
})