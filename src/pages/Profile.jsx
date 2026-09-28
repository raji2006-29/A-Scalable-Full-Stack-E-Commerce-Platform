import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>My Profile</h1>
      <p><strong>Name:</strong> Sravya</p>
      <p><strong>Email:</strong> sravya@gmail.com</p>
      <button onClick={() => navigate("/orders")}>
        My Orders
      </button>
    </div>
  );
}
export default Profile;