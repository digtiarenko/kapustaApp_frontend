const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsRefreshing = state => state.auth.isRefreshing;
const getUserEmail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getIsRefreshing,
  getUserName,
  getUserEmail,
};

export default authSelectors;
