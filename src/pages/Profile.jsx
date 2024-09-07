import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = ({ users, updateUser, deleteUser }) => {
  const { email } = useParams();  // Get the email from the URL params
  const user = users.find((u) => u.email === email);  // Find the user based on email
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ ...user });
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (passwordInput === user.password) {
      updateUser(formData);  // Update the user data
      navigate('/dashboard');
    } else {
      setError('Incorrect password. Cannot update profile.');
    }
  };

  const handleDelete = () => {
    if (passwordInput === user.password) {
      deleteUser(user.email);  // Delete the user profile
      navigate('/dashboard');
    } else {
      setError('Incorrect password. Cannot delete profile.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Edit Profile</h1>
      {user ? (
        <form onSubmit={handleEdit} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Preferences</label>
            <input
              type="text"
              name="preferences"
              value={formData.preferences}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Enter Password to Confirm</label>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded shadow"
            >
              Update Profile
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded shadow"
            >
              Delete Profile
            </button>
          </div>
        </form>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
};

export default Profile;
