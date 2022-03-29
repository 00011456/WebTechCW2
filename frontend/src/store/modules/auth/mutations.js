export default {
  logIn(state, { token, userId, userStatus, userName }) {
    localStorage.setItem("userId", userId);
    state.userId = localStorage.getItem("userId");
    localStorage.setItem("token", token);
    state.token = localStorage.getItem("token");
    localStorage.setItem("userName", userName);
    state.userName = localStorage.getItem("userName");
    localStorage.setItem("userStatus", userStatus);
    state.userStatus = localStorage.getItem("userStatus");
  },

  logout(state) {
    state.token = null;
    state.userStatus = null;
    state.userId = null;
    state.userName = "User";
    localStorage.clear();
  },
};
