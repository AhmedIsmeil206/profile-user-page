import { Link } from 'react-router-dom';

const Dashboard = ({ users }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Dashboard</h1>
      {users.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.email} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{user.name}</h2>
              <p className="text-lg text-gray-600 mb-4">Email: {user.email}</p>
              <Link
                to={`/profile/${user.email}`}
                className="mt-6 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Edit Profile
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-600">No profiles found. Please register a profile.</p>
      )}
    </div>
  );
};

export default Dashboard;
