import { addItemToCartByProductId, getItemFromCartByProductId } from '../../cart.js';

describe('addItemToCartByProductId', () => {
  it('adds new item to cart', () => {
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    addItemToCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    const p = getItemFromCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(p.productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(p.quantity).toEqual(1);
  });
  it('adds existing item to cart', () => {
    addItemToCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    addItemToCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    const p = getItemFromCartByProductId('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(p.productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(p.quantity).toEqual(2);
  });
});
