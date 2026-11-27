import { loadProducts, products } from "../data/products.js";
import { cart } from './cart@2.js';

loadProducts(renderProducts);

function renderProducts() {
  document.querySelector(".cart-quantity").innerHTML = cart.getTotalItemsInCart();

  const productsRoot = document.querySelector(".js-products-grid");

  products.forEach(p => {
    productsRoot.innerHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${p.getImage()}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${p.getName()}}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${p.getRating().stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${p.getRating().count}
            </div>
          </div>

          <div class="product-price">
            $${p.getPriceCents()}
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
      cart.addItemToCartByProductId(b.dataset.productId);
      document.querySelector(".cart-quantity").innerHTML = cart.getTotalItemsInCart();

    });
  });
}
