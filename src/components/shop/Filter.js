import {
  typeData,
  brandData,
  colorData,
  sizeData,
  metalData,
} from "../../data/materials";
import FilterPrice from "./FilterPrice";
import FilterRow from "./FilterRow";

export default function Filter() {
  return (
    <div className="shop-filter-section" style={{ textAlign: "left" }}>
      <FilterRow title="Availablity" data={["In Stock", "Out Of Stock"]} />
      <FilterPrice />
      <FilterRow title="Product type" data={typeData} />
      <FilterRow title="Brand" data={brandData} />
      <FilterRow title="Color" data={colorData} />
      <FilterRow title="Size" data={sizeData} />
      <FilterRow title="Material" data={metalData} />
    </div>
  );
}
