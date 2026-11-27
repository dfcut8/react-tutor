class Product {
  #id;
  #image;
  #name;
  #rating;
  #priceCents;
  #keywords;
  type1 = 'product';

  constructor(productDetails) {
    this.#id = productDetails.id;
    this.#image = productDetails.image;
    this.#name = productDetails.name;
    this.#rating = productDetails.rating;
    this.#priceCents = productDetails.priceCents;
    this.#keywords = productDetails.keywords;
  }

  getId() {
    return this.#id;
  }

  getImage() {
    return this.#image;
  }

  getName() {
    return this.#name;
  }

  getPriceCents() {
    return this.#priceCents;
  }
}

class Clothing extends Product {
  #size;
  constructor(productDetails) {
    super(productDetails);
    this.#size = productDetails.size;
  }

  getName() {
    return super.getName() + ` (${this.#size})`;
  }

  getSize() {
    return this.#size;
  }
}

const products = [];

function loadProducts() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    console.log(xhr.response);
  });
  xhr.open('GET', 'https://supersimpledevbackend.dev/products');

}

export function getProductById(id) {
  return products.find(x => x.id === id);
}

export default products;