import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link
        href={`/product/${product.id}`}
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
