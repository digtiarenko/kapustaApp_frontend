const getIsLoggedIn = state => state.auth.isLoggedIn;

const getRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getRefreshing,
};

export default authSelectors;
