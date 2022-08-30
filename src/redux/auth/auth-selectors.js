const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsRefreshing = state => state.auth.getIsRefreshing;
const authSelectors = {
  getIsLoggedIn,
  getIsRefreshing,
};
export default authSelectors;
