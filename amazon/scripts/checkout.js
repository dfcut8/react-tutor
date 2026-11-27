import { loadProducts } from "../data/products.js";
import { renderCheckout } from "./checkout/order-summary.js";

loadProducts(() => { renderCheckout() });