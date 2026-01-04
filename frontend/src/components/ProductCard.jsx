import {Link} from "react-router-dom"

function ProductCard({ product }) {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

  return (
    <Link to={`/product/${product.id}`}>
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-3 cursor-pointer">
      <img
        src={`${BASEURL}${product.image}`}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      <h2 className="text-sm font-semibold text-gray-800 truncate">
        {product.name}
      </h2>

      <p className="text-sm font-bold text-emerald-600">
        ₹{product.price}
      </p>
    </div>
    </Link>
  );
}

export default ProductCard;
