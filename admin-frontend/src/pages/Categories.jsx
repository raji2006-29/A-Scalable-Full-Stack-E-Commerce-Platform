import Sidebar from "../components/Sidebar";

function Categories() {
  return (
    <div className="admin-layout">

      <Sidebar />

      <main className="dashboard">

        <h1>Categories</h1>

        <div className="category-list">

          <div className="card">
            Electronics
          </div>

          <div className="card">
            Clothing
          </div>

          <div className="card">
            Shoes
          </div>

          <div className="card">
            Books
          </div>

        </div>

      </main>

    </div>
  );
}

export default Categories;