import Sidebar from "../components/Sidebar";

function Orders() {
  return (
    <div className="admin-layout">

      <Sidebar />

      <main className="dashboard">

        <h1>Orders</h1>

        <table>

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>#1001</td>
              <td>John</td>
              <td>₹2500</td>
              <td>Delivered</td>
            </tr>

            <tr>
              <td>#1002</td>
              <td>Rahul</td>
              <td>₹1800</td>
              <td>Pending</td>
            </tr>

          </tbody>

        </table>

      </main>

    </div>
  );
}

export default Orders;