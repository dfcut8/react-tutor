import dayjs from "https://unpkg.com/dayjs@1.8.9/esm/index.js";
import products from "../data/products.js";
import { cart, getTotalItemsInCart, removeItemFromCartByProductId, updateItemFromCartByProductId } from "./cart.js";
import { formatCurrency } from "./utils/money.js";

const now = dayjs();
const delivery7d = now.add(7, 'days');
console.log(delivery7d.format('dddd, MMMM D'));

const orderSummaryRoot = document.querySelector(".js-order-summary");
cart.forEach(item => {
  const p = products.find(x => x.id === item.productId);
  orderSummaryRoot.innerHTML += `<div class="cart-item-container js-cart-item-container-${p.id}">
          <div class="delivery-date">
            Delivery date: Wednesday, June 15
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image" src="${p.image}">

            <div class="cart-item-details">
              <div class="product-name">
                ${p.name}
              </div>
              <div class="product-price">
                $${formatCurrency(p.priceCents)}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label js-quantity-label-${p.id}">${item.quantity}
                  </span>
                </span>
                <span
                  class="update-quantity-link js-update-quantity-link link-primary"
                  data-product-id="${p.id}"
                  data-quantity="${item.quantity}">
                  Update
                </span>
                <span
                  class="delete-quantity-link js-delete-quantity-link link-primary"
                  data-product-id="${p.id}">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>

              <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-${p.id}">
                <div>
                  <div class="delivery-option-date">
                    Tuesday, June 21
                  </div>
                  <div class="delivery-option-price">
                    FREE Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio" checked class="delivery-option-input" name="delivery-option-${p.id}">
                <div>
                  <div class="delivery-option-date">
                    Wednesday, June 15
                  </div>
                  <div class="delivery-option-price">
                    $4.99 - Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-${p.id}">
                <div>
                  <div class="delivery-option-date">
                    Monday, June 13
                  </div>
                  <div class="delivery-option-price">
                    $9.99 - Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
});

// add event listener to all delete links
const deleteButtons = document.querySelectorAll(".js-delete-quantity-link");
deleteButtons.forEach(b => b.addEventListener("click", () => {
  const parent = b.parentNode;
  const productId = b.dataset.productId
  removeItemFromCartByProductId(productId);
  document.querySelectorAll(`.js-cart-item-container-${productId}`).forEach(e => e.remove());
}))

// add event listener to all update links
let currentUpdate;
const updateButtons = document.querySelectorAll(".js-update-quantity-link");
updateButtons.forEach(b => b.addEventListener("click", () => {

  const productId = b.dataset.productId;
  const quantityLabelRoot = document.querySelector(`.js-quantity-label-${productId}`);
  const quantity = Number(quantityLabelRoot.innerHTML);
  renderUpdateInputHtml(productId, quantity);
  currentUpdate = b;
  b.hidden = true;
}));

function renderUpdateInputHtml(productId, quantity) {
  const updateInputHTML = `
  <input type="number" class="quantity-value js-quantity-value-${productId}"
    data-product-id="${productId}" name="quantity-edit-${productId}" value=${quantity}>
  <button class="quantity-save js-quantity-save-${productId}"
    data-product-id=${productId}">save</button>`
  const quantityLabelRoot = document.querySelector(`.js-quantity-label-${productId}`);
  quantityLabelRoot.innerHTML = updateInputHTML;
  const quantityInputRoot = document.querySelector(`.js-quantity-value-${productId}`);
  document.querySelector(`.js-quantity-save-${productId}`).addEventListener("click", (e) => {
    const newQuantity = Number(quantityInputRoot.value);
    updateAndRenderItem(quantityLabelRoot, productId, newQuantity);
  })
  quantityLabelRoot.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const newQuantity = Number(quantityInputRoot.value);
      updateAndRenderItem(quantityLabelRoot, productId, newQuantity);
    }
  })
}

function updateAndRenderItem(label, productId, quantity,) {
  updateItemFromCartByProductId(productId, quantity);
  label.innerHTML = quantity;
  currentUpdate.hidden = false;
  updateSummary()
}

// handle checkout summary
updateSummary();
function updateSummary() {
  const checkoutSummaryRoot = document.querySelector(".js-checkout-header-middle-section");
  checkoutSummaryRoot.innerHTML = `Checkout(<a class="return-to-home-link" href="amazon.html">${getTotalItemsInCart()} items</a>)`
};