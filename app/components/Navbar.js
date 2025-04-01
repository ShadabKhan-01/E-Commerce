import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-2xl font-bold">
          E-Shop
        </Link>
        <div>
          <SearchBar/>
        </div>
        <div>
          <Link href="/" className="mr-4">
            Home
          </Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
