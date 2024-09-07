export const getUserData = async () => {
    try {
      const response = await fetch('/api/user');  // Replace with actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };
  