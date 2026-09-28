import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("/api/orders")
      .then((response) => response.json())
      .then((data) => {
        console.log("Orders API data:", data);
        setOrders(data.orders || []);
      })
      .catch((error) => {
        console.error("Orders error:", error);
      });
  }, []);

  return (
    <div>
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id}>
            <h2
  onClick={() => navigate(`/orders/${order.id}`)}
  style={{ cursor: "pointer" }}
>
  Order ID: {order.id}
</h2>

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

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;