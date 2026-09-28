import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Products() {

  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const addProduct = (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.category) {
      alert("Please fill all fields");
      return;
    }

    setProducts([
      ...products,
      {
        ...product,
        id: Date.now()
      }
    ]);

    setProduct({
      name: "",
      price: "",
      category: ""
    });
  };

  const deleteProduct = (id) => {
    setProducts(
      products.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="admin-layout">

      <Sidebar />

      <main className="dashboard">

        <h1>Products</h1>

        <form
          className="product-form"
          onSubmit={addProduct}
        >

          <input
            type="text"
            name="name"
            placeholder="Product name"
            value={product.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
          />

          <button type="submit">
            Add Product
          </button>

        </form>

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {products.map((item) => (

              <tr key={item.id}>

                <td>{item.name}</td>

                <td>₹{item.price}</td>

                <td>{item.category}</td>

                <td>
                  <button
                    onClick={() =>
                      deleteProduct(item.id)
                    }
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </main>

    </div>
  );
}

export default Products;