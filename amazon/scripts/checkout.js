import { loadProducts } from "../data/products.js";
import { renderCheckout } from "./checkout/order-summary.js";

new Promise((resolve) => {
  // console.log('start promise');
  loadProducts(() => {
    // console.log('inside loadProducts');
    resolve();
  });
  // console.log('finish promise');
}).then(() => {
  // console.log('next step');
  renderCheckout();
});
