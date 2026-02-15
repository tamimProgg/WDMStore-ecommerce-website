import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  return (
    <>
      <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition duration-500 transform border border-gray-800 group hover:scale-[1.03] hover:shadow-orange-900/40">
        <Link
          to={`/product/${product.id}`}
          className="relative cursor-pointer overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90"
          />

          <div className="absolute bottom-0 left-0 bg-orange-600/95 text-white px-5 py-2 text-xl font-extrabold rounded-tr-xl shadow-lg">
            ৳{product.price.toFixed(2)}
          </div>
        </Link>

        <div className="p-5 flex flex-col grow">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-2xl font-extrabold text-white mb-2 cursor-pointer hover:text-orange-400 transition duration-200 line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-gray-400 text-sm mb-4 line-clamp-3 grow">
            {product.description}
          </p>
          <div>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full font-semibold flex items-center text-xs text-gray-500 mb-4 w-fit">
              {product.category}
            </span>
          </div>

          <button className="mx-auto w-full py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-3 hover:ring-orange-600 uppercase tracking-wider">
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductCart;
