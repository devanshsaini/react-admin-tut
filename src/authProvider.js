export default {
  // Login
  login: ({ username }) => {
    localStorage.setItem("username", username);
    return Promise.resolve();
  },

  // Logout
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },

  // Error returned from API
  checkError: ({ status }) => {
    if (status === (401 || 403)) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  // New route navigation (checking authorization)
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },

  // New route navigation (checking permissions)
  getPermissions: () => Promise.resolve(),
};
