import { getDeliveryOptionById } from "../../data/deliveryOptions.js";
import { getProductById } from "../../data/products.js";
import * as cart from "../cart.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {
  const root = document.querySelector(".js-payment-summary");

  // hardcode for now
  const tax = 10;

  let itemsTotalCents = 0;
  let deliveryTotalCents = 0;
  let totalBeforeTaxCents = 0;
  let estimatedTaxCents = 0;
  let totalCents = 0;
  const items = cart.cart;
  items.forEach(i => {
    const p = getProductById(i.productId);
    const d = getDeliveryOptionById(i.deliveryOptionId);
    console.log(i.productId, p.name, i.quantity, d.id, p.priceCents);
    itemsTotalCents += i.quantity * p.priceCents;
    deliveryTotalCents += d.priceCents;
  });

  totalBeforeTaxCents = itemsTotalCents + deliveryTotalCents;
  estimatedTaxCents = totalBeforeTaxCents / tax;
  totalCents = totalBeforeTaxCents + estimatedTaxCents;

  const html = `<div class="payment-summary-title">
          Order Summary
        </div>

        <div class="payment-summary-row">
          <div>Items (3):</div>
          <div class="payment-summary-money">$${formatCurrency(itemsTotalCents)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div class="payment-summary-money">$${formatCurrency(deliveryTotalCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div class="payment-summary-money">$${formatCurrency(estimatedTaxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
          <div>Order total:</div>
          <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
        </div>

        <button class="place-order-button button-primary">
          Place your order
        </button>`;
  root.innerHTML = html;
}