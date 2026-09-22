import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link to={`/products/${product.id}`}>
        View Product
      </Link>
    </div>
  );
}
export default ProductCard;