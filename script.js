window.dataLayer = window.datalayer || [];

const myFunction = (id) => {
  const a = document.querySelectorAll(".card");
  const ele = a[id];

  let name = ele.getElementsByClassName("name");
  name = name[0].textContent;
  name = name.split(": ")[1];

  let price = ele.getElementsByClassName("price");
  price = price[0].textContent;
  price = price.split(": ")[1];

  window.dataLayer.push({
    event: "AddToCart",
    eventCategory: "product",
    eventAction: "click",
    eventLabel: name,
    eventValue: price,
  });
};
