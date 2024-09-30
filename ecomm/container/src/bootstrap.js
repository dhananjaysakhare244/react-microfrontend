import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";
console.log("Container!");

const productEl = document.querySelector("#my-products");
const cartEl = document.querySelector("#my-cart");
productsMount(productEl);
cartMount(cartEl);
