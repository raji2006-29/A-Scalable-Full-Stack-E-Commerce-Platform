import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load product");
      });
  }, [id]);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      <h1>Product Details</h1>

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <p>Price: ₹{product.price}</p>

      <p>Category: {product.category}</p>

      <p>Stock: {product.stock}</p>
      <button onClick={() => navigate("/cart", { state: { product } })}>
    Add to Cart
</button>
      <button onClick={() => navigate("/products")}>
    Back to Products
</button>
    </div>
  );
}

export default ProductDetails;