import { useEffect, useState } from 'react';
import { getUserData } from '../services/userService';

export const useUserData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserData().then(data => setUser(data)).catch(error => console.log(error));
  }, []);

  return user;
};
