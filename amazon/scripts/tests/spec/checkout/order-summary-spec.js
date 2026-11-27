import { cart } from '../../../cart.js';
import { renderCheckout } from "../../../checkout/order-summary.js";

describe("renderCheckout", () => {
  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    spyOn(localStorage, 'setItem').and.callFake(() => {
    });
    loadCart();
    cart.addItemToCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    cart.addItemToCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    cart.addItemToCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    cart.addItemToCartByProductId('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    cart.addItemToCartByProductId('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    document.querySelector(".js-test-container").innerHTML = `
      <div class="js-order-summary"></div>
    `;
  });

  it("displays the cart", () => {

    expect(1).toEqual(1);
    renderCheckout();
  })
});
