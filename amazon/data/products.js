import { formatCurrency } from "../scripts/utils/money.js";

class Product {
  #id;
  #image;
  #name;
  #rating;
  #priceCents;
  #keywords;

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
    return formatCurrency(this.#priceCents * 100);
  }

  getRating() {
    return this.#rating;
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

export let products = [];

export function loadProducts(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://supersimplebackend.dev/products');
  xhr.send();
  xhr.addEventListener('load', () => {
    // console.log(JSON.parse(xhr.response));
    products = JSON.parse(xhr.response).map((productDetails) => {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      }
      return new Product(productDetails);
    });
    console.log('products loaded successfully');
    callback();
  });
}

export function getProductById(id) {
  return products.find(x => x.getId() === id);
}