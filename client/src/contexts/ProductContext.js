import { useState, createContext } from "react";
import { pageData } from "../data/pageData";

export const ProductContext = createContext();
let checks = localStorage.getItem("checkValue");
const checked = JSON.parse(checks);

let prices = localStorage.getItem("price");
const priceValue = JSON.parse(prices);

export default function RecipesContextProvider({ children }) {
  const [products, setProducts] = useState(pageData);
  const [price, setPrice] = useState(
    priceValue ? priceValue : { startPrice: 0, endPrice: 200 }
  );
  const [checkValue, setCheckValue] = useState(checked ? checked : []);

  let checkResultProduct;
  let typeCheck = [];
  let otherCheck = [];
  let stockCheck = [];
  let priceCheck = [];

  if (price.startPrice > 0) {
    let data = products;
    if (checkResultProduct) data = checkResultProduct;
    priceCheck = data.filter((item) => {
      return item.price >= price.startPrice && item.price <= price.endPrice;
    });
  }

  if (checkValue.some((v) => v.type === "Product type")) {
    let types = checkValue.filter((v) => v.type === "Product type");
    let data = products;
    if (priceCheck.length > 0) data = priceCheck;
    if (stockCheck.length > 0) data = stockCheck;
    if (otherCheck.length > 0) data = otherCheck;

    typeCheck = checkResult(
      types.map((t) =>
        data.filter((item) => {
          return item.category.includes(t.item);
        })
      )
    );
  }

  if (checkValue.some((v) => v.type === "Availablity")) {
    let otherTypes = checkValue.filter((v) => v.type === "Availablity");
    let data = products;
    if (priceCheck.length > 0) data = priceCheck;
    if (typeCheck.length > 0) data = typeCheck;
    if (otherCheck.length > 0) data = otherCheck;

    stockCheck = checkResult(
      otherTypes.map((t) =>
        t.item === "In Stock"
          ? data.filter((item) => {
              return item.stock;
            })
          : data.filter((item) => {
              return !item.stock;
            })
      )
    );
  }

  if (
    checkValue.some(
      (v) => v.type !== "Product type" || v.type !== "Availablity"
    )
  ) {
    let otherTypes = checkValue.filter(
      (v) => v.type !== "Product type" || v.type !== "Availablity"
    );
    let data = products;
    if (priceCheck.length > 0) data = priceCheck;
    if (stockCheck.length > 0) data = stockCheck;
    if (typeCheck.length > 0) data = typeCheck;

    otherCheck = checkResult(
      otherTypes.map((t) =>
        data.filter((item) => {
          return item.color.includes(t.item) || item.size === t.item;
        })
      )
    );
  }

  function checkResult(data) {
    if (checkValue.length < 0) return;
    // destructuring the array
    let laterProducts = data.slice(1);
    let finalProduct = data[0].concat(...laterProducts);
    // Filtering duplicated items
    let jsonObject = finalProduct.map(JSON.stringify);
    let uniqueSet = new Set(jsonObject);
    let uniqueProduct = Array.from(uniqueSet).map(JSON.parse);

    return [...new Set(uniqueProduct)];
  }

  if (otherCheck.length > 0) {
    checkResultProduct = otherCheck;
  } else if (stockCheck.length > 0) {
    checkResultProduct = stockCheck;
  } else if (typeCheck.length > 0) {
    checkResultProduct = typeCheck;
  } else if (priceCheck.length > 0) {
    checkResultProduct = priceCheck;
  } else {
    checkResultProduct = products;
  }

  return (
    <ProductContext.Provider
      value={{
        checkValue,
        setCheckValue,
        price,
        setPrice,
        checkResultProduct,
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
