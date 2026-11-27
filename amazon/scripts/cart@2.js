class Cart {
  #cart = [];

  constructor(localStorageKeyName) {
    this.localStorageKeyName = localStorageKeyName;
    this.#loadCart();
  }

  addItemToCartByProductId(productId) {
    const item = this.#cart.find(x => x.productId === productId);
    if (item) {
      item.quantity++;
    } else {
      this.#cart.push({ productId: productId, quantity: 1, deliveryOptionId: "1" });
    }
    this.#saveCart();
  }

  getItemFromCartByProductId(id) {
    return this.#cart.find(x => x.productId == id)
  }

  getTotalItemsInCart() {
    return this.#cart.reduce((total, item) => total + item.quantity, 0);
  }

  getItems() {
    return this.#cart.slice();
  }

  removeItemFromCartByProductId(productId) {
    // console.log(`removeItemFromCartByProductId: productId=${productId}`);
    const index = this.#cart.findIndex(x => x.productId === productId);
    if (index !== -1) {
      this.#cart.splice(index, 1);
    }
    this.#saveCart();
  }

  updateItemFromCartByProductId(productId, quantity) {
    const index = this.#cart.findIndex(x => x.productId === productId);
    if (index !== -1) {
      this.#cart[index].quantity = quantity;
    }
    this.#saveCart();
  }

  updateDeliveryOption(productId, deliveryOptionId) {
    const index = this.#cart.findIndex(x => x.productId === productId);
    if (index !== -1) {
      this.#cart[index].deliveryOptionId = deliveryOptionId;
    }
    this.#saveCart();
  }

  #loadCart() {
    this.#cart = JSON.parse(localStorage.getItem(this.localStorageKeyName));
    if (this.#cart === null) {
      this.#cart = [];
    }
  }

  #saveCart() {
    localStorage.setItem(this.localStorageKeyName, JSON.stringify(this.#cart));
  }
};

export const cart = new Cart('amazon-cart-class-version');