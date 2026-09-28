import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <h1>Welcome to ShopEasy 🛒</h1>
      <p>Find the best products at the best prices.</p>

      <Link to="/products" className="button">
        Shop Now
      </Link>
    </div>
  );
}
export default Home;