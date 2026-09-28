import { useLocation, Link } from "react-router-dom";

function OrderConfirmation() {
  const location = useLocation();

  const order = location.state?.order;

  return (
    <div>
      <h1>Order Confirmed 🎉</h1>

      {order ? (
        <>
          <h2>Thank you for your order!</h2>

          <p>
            <strong>Order ID:</strong> {order.id}
          </p>

          <p>
            <strong>Customer Name:</strong> {order.customerName}
          </p>

          <p>
            <strong>Email:</strong> {order.customerEmail}
          </p>

          <p>
            <strong>Total Amount:</strong> ₹{order.totalAmount}
          </p>

          <p>
            <strong>Status:</strong> {order.status}
          </p>

          <br />

          <Link to="/orders">
            <button>View My Orders</button>
          </Link>

          <br />
          <br />

          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </>
      ) : (
        <>
          <p>Order information not available.</p>

          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default OrderConfirmation;