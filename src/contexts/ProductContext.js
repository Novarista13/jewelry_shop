import { useState, createContext } from "react";
import { pageData } from "../data/pageData";

export const ProductContext = createContext();
let checks = localStorage.getItem("checkValue");
const checked = JSON.parse(checks);

export default function RecipesContextProvider({ children }) {
  const [products, setProducts] = useState(pageData);
  const [checkValue, setCheckValue] = useState(checked ? checked : []);

  let typeCheck;
  if (checkValue.some((v) => v.type === "Product type")) {
    let types = checkValue.filter((v) => v.type === "Product type");
    typeCheck = checkResult(
      types.map((t) =>
        products.filter((item) => {
          return item.category.includes(t.item);
        })
      )
    );
  }

  let otherCheck;
  if (checkValue.some((v) => v.type !== "Product type")) {
    let otherTypes = checkValue.filter((v) => v.type !== "Product type");
    let data = products;
    if (typeCheck) data = typeCheck;
    otherCheck = checkResult(
      otherTypes.map((t) =>
        data.filter((item) => {
          return item.color.includes(t.item);
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

  let checkResultProduct;
  if (otherCheck) {
    checkResultProduct = otherCheck;
  } else if (typeCheck) {
    checkResultProduct = typeCheck;
  } else {
    checkResultProduct = products;
  }

  return (
    <ProductContext.Provider
      value={{
        checkValue,
        setCheckValue,
        checkResultProduct,
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
