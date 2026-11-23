export const cart = [];

export function getProductById(id) {
  return cart.find(x => x.productId == id)
}

export function getTotalItemsInCart() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}