const cart = [];

function getProductById(id) {
  return cart.find(x => x.productId == id)
}