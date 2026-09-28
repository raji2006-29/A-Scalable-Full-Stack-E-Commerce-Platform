import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="admin-layout">

      <Sidebar />

      <main className="dashboard">
        <h1>Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h3>Products</h3>
            <p>120</p>
          </div>

          <div className="card">
            <h3>Users</h3>
            <p>350</p>
          </div>

          <div className="card">
            <h3>Orders</h3>
            <p>85</p>
          </div>

          <div className="card">
            <h3>Categories</h3>
            <p>12</p>
          </div>

        </div>
      </main>

    </div>
  );
}

export default Dashboard;