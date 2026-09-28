import Sidebar from "../components/Sidebar";

function Users() {
  return (
    <div className="admin-layout">

      <Sidebar />

      <main className="dashboard">

        <h1>Users</h1>

        <table>

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>User</td>
            </tr>

            <tr>
              <td>Admin</td>
              <td>admin@gmail.com</td>
              <td>Admin</td>
            </tr>
          </tbody>

        </table>

      </main>

    </div>
  );
}

export default Users;