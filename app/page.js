import products from "./data/products.json";
import ProductCard from "./components/ProductCard";
import Carousel from "./components/Carousel";
import BrandInfo from "./components/BrandInfo";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">E-Commerce Store</h1>
      <Carousel/>
      <BrandInfo
        name="E-Shopify"
        description="E-Shopify is your go-to platform for all things fashion and electronics. Enjoy seamless shopping with quality products delivered right to your doorstep."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
