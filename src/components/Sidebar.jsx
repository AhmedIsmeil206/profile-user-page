import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-6">
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-blue-300">Profile</Link>
        </li>
        <li>
          <Link to="/register" className="hover:text-blue-300">Register</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
