import { Link } from 'react-router-dom';

const Dashboard = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>Welcome, <Link to="/profile" className="text-blue-600">{user.name}</Link>!</p>
      <p>Your email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
