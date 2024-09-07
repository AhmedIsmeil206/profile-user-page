import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
  const [users, setUsers] = useState([]);  // Array to store multiple user profiles

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  // Function to edit an existing user
  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.email === updatedUser.email ? updatedUser : user))
    );
  };

  // Function to delete a user
  const deleteUser = (email) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <main className="p-6 bg-gray-50 min-h-screen">
            <Routes>
              <Route path="/dashboard" element={<Dashboard users={users} />} />
              <Route
                path="/profile/:email"
                element={<Profile users={users} updateUser={updateUser} deleteUser={deleteUser} />}
              />
              <Route path="/register" element={<Register addUser={addUser} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
