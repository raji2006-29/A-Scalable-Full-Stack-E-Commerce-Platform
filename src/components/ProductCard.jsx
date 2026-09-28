import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <div className="card">
      
      <img
  src={
    product.name === "Laptop"
      ? "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
      : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  }
  alt={product.name}
/>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link to={`/products/${product.id}`}>
        View Product
      </Link>
    </div>
  );
}
export default ProductCard;