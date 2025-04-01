const CartItem = ({ item, setCart }) => {
    const removeFromCart = (id) => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart = cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(cart));
      setCart(cart);
    };
  
    return (
      <div className="flex justify-between items-center border-b py-4">
        <div>
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p>${item.price} x {item.quantity}</p>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Remove
        </button>
      </div>
    );
  };
  
  export default CartItem;
  