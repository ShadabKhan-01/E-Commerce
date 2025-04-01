import AddToCartButton from "@/app/components/AddToCartButton";
import products from "../../data/products.json";
import { notFound } from "next/navigation";

const Page =async ({ params }) => {
  const { id } =await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return notFound();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg"
      />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-700 my-4">{product.description}</p>
        <p className="text-xl font-bold mb-4">${product.price}</p>
        <AddToCartButton product={product}/>
      </div>
    </div>
  );
};

export default Page;
