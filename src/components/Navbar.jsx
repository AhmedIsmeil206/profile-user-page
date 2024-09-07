import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-white text-lg font-bold">
          Dashboard
        </Link>
        <Link to="/profile" className="text-white">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
