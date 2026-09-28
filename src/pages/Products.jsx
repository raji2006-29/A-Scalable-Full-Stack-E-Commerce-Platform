import { useEffect, useState } from "react";
import API from "../api/api";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get("/products");
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
        product.name?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
        category === "" || product.category === category;

    return matchesSearch && matchesCategory;
});
  if (loading) {
    return <h2>Loading products...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
        <h1>Products</h1>

        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
>
    <option value="">All Categories</option>

    {[...new Set(products.map((product) => product.category))].map(
        (cat) => (
            <option key={cat} value={cat}>
                {cat}
            </option>
        )
    )}
</select>
        </div>

        <div>
            {filteredProducts.map((product) => (
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