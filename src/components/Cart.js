import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
 const cartItems = useSelector((state) => state.cart.items);

const dispatch = useDispatch();

const handleClearCart = () => {
    dispatch(clearCart());
};

return (
    <div className="text-center m-4 p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-extrabold mb-4">Cart</h1>
        <div className="border-t border-gray-200 pt-4">
            <ItemList items={cartItems} />
        </div>
        <button 
            onClick={handleClearCart} 
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-red-700"
        >
            Clear Cart
        </button>
    </div>
);
};

export default Cart;
