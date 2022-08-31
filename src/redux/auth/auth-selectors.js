const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getIsRefreshing,
};

export default authSelectors;
