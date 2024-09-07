import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ addUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    preferences: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new user profile
    addUser(formData);
    // Navigate to the dashboard after registration
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Register</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        {/* Same form fields as before */}
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
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
