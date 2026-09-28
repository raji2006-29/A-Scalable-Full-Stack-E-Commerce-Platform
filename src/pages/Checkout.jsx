import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
function Checkout() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await API.post("/orders", {
  customerName: name,
  customerEmail: email,
  items: [
    {
      productId: 1,
      name: "Test Product",
      quantity: 1,
      price: 100
    }
  ],
  totalAmount: 100
});

    alert(response.data.message);
    navigate("/order-confirmation", {
      state: {
        order: response.data.order
      }
    });
    setName("");
    setEmail("");
    setAddress("");
  } catch (error) {
    console.error(error);
    alert("Failed to place order");
  }
};

  return (
    <div>
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Address</label>
          <br />
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;