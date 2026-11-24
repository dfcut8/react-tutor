export let cart = JSON.parse(localStorage.getItem("amazon-cart"));
if (cart === null) {
  cart = [];
}

export function addItemToCartByProductId(productId) {
  const item = cart.find(x => x.productId === productId);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ productId: productId, quantity: 1, deliveryOptionId: "0" });
  }
  saveCart();
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
  saveCart();
}

export function updateItemFromCartByProductId(productId, quantity) {
  const index = cart.findIndex(x => x.productId === productId);
  if (index !== -1) {
    cart[index].quantity = quantity;
  }
  saveCart();
}

function saveCart() {
  localStorage.setItem("amazon-cart", JSON.stringify(cart));
}