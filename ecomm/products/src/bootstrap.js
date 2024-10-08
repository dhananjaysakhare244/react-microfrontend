import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Situation 1
// When we are running code in dev isolation.
// use local index.html which has an id of 'dev-products'
// We want to render app immediately.

// this NODE_ENV is configured in webpack
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  // Assuming container does not have element with id 'dev-products'
  if (el) mount(el); // we are running in isolation
}

// Situation 2
// We are running this file in prod/dev through container app.
// NO guarantee 'dev-products' exists.
// We do not want to render app immediately.
export { mount };
