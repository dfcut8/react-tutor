const cart = [];

function getProductById(id) {
  return cart.find(x => x.productId == id)
}

function getTotalItemsInCart() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}