const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getIsFetchingCurrent,
};

export default authSelectors;
