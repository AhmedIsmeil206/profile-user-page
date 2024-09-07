const ProfileInfo = ({ user }) => {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Profile Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <p>{user.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <p>{user.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact</label>
          <p>{user.contact}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Preferences</label>
          <p>{user.preferences}</p>
        </div>
      </div>
    );
  };
  
  export default ProfileInfo;
  