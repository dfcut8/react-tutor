import { addItemToCartByProductId, getItemFromCartByProductId, loadCart } from '../../cart.js';

describe('addItemToCartByProductId', () => {
  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    spyOn(localStorage, 'setItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    loadCart();
  });

  it('adds new item to cart', () => {
    addItemToCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    const p = getItemFromCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(p.productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(p.quantity).toEqual(1);
    expect(localStorage.getItem)
      .toHaveBeenCalledOnceWith('amazon-cart');
    expect(localStorage.setItem)
      .toHaveBeenCalledOnceWith('amazon-cart', jasmine.any(String));
  });
  it('adds existing item to cart', () => {
    addItemToCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    addItemToCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    const p = getItemFromCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(p.productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(p.quantity).toEqual(2);
    expect(localStorage.getItem)
      .toHaveBeenCalledOnceWith('amazon-cart');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem.calls.allArgs()).toEqual([
      ['amazon-cart', jasmine.any(String)],
      ['amazon-cart', jasmine.any(String)],
    ]);
  });
});
