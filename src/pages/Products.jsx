import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: 1999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 1499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
  },
  {
    id: 4,
    name: "Backpack",
    price: 999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
  }
];

function Products() {
  return (
    <div className="products">
      <h1>Our Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;