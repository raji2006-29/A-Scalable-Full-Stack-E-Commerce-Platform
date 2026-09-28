import { useLocation, useNavigate } from "react-router-dom";
function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  return (
     <div>
            <h1>Shopping Cart</h1>

            {product ? (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ₹{product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>Stock: {product.stock}</p>
                    <button
                        onClick={() =>
                            navigate("/checkout", { state: { product } })
                        }
                    >
                        Checkout
                    </button>
                </div>
            ) : (
                <p>Your cart is currently empty.</p>
            )}
        </div>
    );
}
export default Cart;