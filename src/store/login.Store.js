// 登录模块
import { makeAutoObservable } from "mobx";
import { setToken, getToken, clearToken, http } from "@/utils";

class LoginStore {
  // token函数持久化配置
  token = getToken() || "";
  constructor() {
    makeAutoObservable(this);
  }
  // 退出登录
  loginOut = () => {
    this.token = "";
    clearToken();
  };
  // 登录
  login = async ({ mobile, code }) => {
    const res = await http.post("http://geek.itheima.net/v1_0/authorizations", {
      mobile,
      code,
    });
    this.token = res.data.token;
    setToken(res.data.token);
  };
}
export default LoginStore;
