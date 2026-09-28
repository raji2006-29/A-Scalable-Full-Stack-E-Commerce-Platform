import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/orders/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Order details:", data);

        setOrder(data.order || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading order details...</p>;
  }

  if (!order) {
    return <p>Order not found.</p>;
  }

  return (
    <div>
      <h1>Order Details</h1>

      <h2>Order ID: {order.id}</h2>

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

      <h3>Items</h3>

      {order.items && order.items.length > 0 ? (
        order.items.map((item, index) => (
          <div key={index}>
            <p>
              <strong>Product:</strong> {item.name}
            </p>

            <p>
              <strong>Quantity:</strong> {item.quantity}
            </p>

            <p>
              <strong>Price:</strong> ₹{item.price}
            </p>

            <hr />
          </div>
        ))
      ) : (
        <p>No items found.</p>
      )}

      <button onClick={() => navigate("/orders")}>
        Back to My Orders
      </button>
    </div>
  );
}

export default OrderDetails;