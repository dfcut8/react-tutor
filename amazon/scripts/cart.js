let cart = JSON.parse(localStorage.getItem("amazon-cart"));
if (cart === null) {
  cart = [];
}

export function addItemToCartByProductId(productId) {
  const item = cart.find(x => x.productId === productId);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ productId: productId, quantity: 1 });
  }
  localStorage.setItem("amazon-cart", JSON.stringify(cart));
}

export function getItems() {

  return cart;
}

export function getItemFromCartByProductId(id) {
  return cart.find(x => x.productId == id)
}

export function getTotalItemsInCart() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

export function removeItemFromCartByProductId(productId) {
  // console.log(`removeItemFromCartByProductId: productId=${productId}`);
  const index = cart.findIndex(x => x.productId === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }
}
