import CategoryFilter from "../components/CategoryFilter";
import  ProductCart  from "../components/ProductCart";
import SearchFilter from "../components/SearchFilter";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { products } = useCart();

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <SearchFilter />
        <CategoryFilter />

        <h2 className="text-2xl font-extrabold mx-auto px-4 md:px-5 py-5 text-white">
          Featured Gear ({products.length} Items)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
          {products.map((product, index) => (
            <ProductCart key={index} product = {product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductList;
