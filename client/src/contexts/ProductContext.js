import { useState, createContext, useEffect } from "react";

export const ProductContext = createContext();
let checks = localStorage.getItem("checkValue");
const checked = JSON.parse(checks);

let prices = localStorage.getItem("price");
const priceValue = JSON.parse(prices);

export default function RecipesContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(
    priceValue ? priceValue : { startPrice: 200, endPrice: 1200 }
  );
  const [checkValue, setCheckValue] = useState(checked ? checked : []);

  const url = "http://localhost:3001/api/jewelleries";

  const fetchInfo = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return setProducts(data);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  let checkResultProduct = products;

  if (price.startPrice > 200) {
    let data = checkResultProduct;
    let priceCheck = data.filter((item) => {
      return item.price >= price.startPrice && item.price <= price.endPrice;
    });
    checkResultProduct = priceCheck;
  }

  if (checkValue.some((v) => v.type === "Availablity")) {
    let otherTypes = checkValue.filter((v) => v.type === "Availablity");
    let data = checkResultProduct;

    let stockCheck = checkResult(
      otherTypes.map((t) =>
        t.item === "In Stock"
          ? data.filter((item) => {
              return item.is_instock;
            })
          : data.filter((item) => {
              return !item.is_instock;
            })
      )
    );
    checkResultProduct = stockCheck;
  }

  function filterAllChecks(checkType, typeName) {
    let types = checkValue.filter((v) => v.type === typeName);
    let data = checkResultProduct;
    return checkResult(
      types.map((t) =>
        checkType === "type"
          ? data.filter((item) => {
              return item.type.includes(t.item);
            })
          : checkType === "color"
          ? data.filter((item) => {
              return item.color.toLowerCase().includes(t.item.toLowerCase());
            })
          : checkType === "size"
          ? data.filter((item) => {
              return parseInt(Math.round(item.size)) === parseInt(t.item);
            })
          : checkType === "brand"
          ? data.filter((item) => {
              return item.brand.includes(
                t.item.toLowerCase().replace(/ /g, "")
              );
            })
          : checkType === "metal"
          ? data.filter((item) => {
              return item.metal.toLowerCase().includes(t.item.toLowerCase());
            })
          : null
      )
    );
  }

  if (checkValue.some((v) => v.type === "Product type")) {
    let filteredValue = filterAllChecks("type", "Product type");
    checkResultProduct = filteredValue ? filteredValue : [];
  }

  if (checkValue.some((v) => v.type === "Color")) {
    let filteredValue = filterAllChecks("color", "Color");
    checkResultProduct = filteredValue ? filteredValue : [];
  }

  if (checkValue.some((v) => v.type === "Size")) {
    let filteredValue = filterAllChecks("size", "Size");
    checkResultProduct = filteredValue ? filteredValue : [];
  }

  if (checkValue.some((v) => v.type === "Brand")) {
    let filteredValue = filterAllChecks("brand", "Brand");
    checkResultProduct = filteredValue ? filteredValue : [];
  }
  
  if (checkValue.some((v) => v.type === "Material")) {
    let filteredValue = filterAllChecks("metal", "Material");
    checkResultProduct = filteredValue ? filteredValue : [];
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
