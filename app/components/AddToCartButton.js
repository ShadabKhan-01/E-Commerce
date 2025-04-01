"use client"

const AddToCartButton = ({product})=>{
    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const itemIndex = cart.findIndex((item) => item.id === product.id);
      
        if (itemIndex > -1) {
          cart[itemIndex].quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
      
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to cart!");
      };

    return (
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Add to Cart
        </button>
    )
}

export default AddToCartButton