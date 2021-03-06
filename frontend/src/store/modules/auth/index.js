import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  state() {
    return {
      userId: localStorage.getItem("userId") || null,
      token: null || localStorage.getItem("token"),
      userName: localStorage.getItem("userName") || "User",
      userStatus: localStorage.getItem("userStatus") || "user",
    };
  },
  mutations,
  actions,
  getters,
};
