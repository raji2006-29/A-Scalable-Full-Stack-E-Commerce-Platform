import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="details">
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Product information will appear here.</p>
    </div>
  );
}

export default ProductDetails;