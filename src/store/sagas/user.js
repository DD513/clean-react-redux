import { takeLatest, call } from "redux-saga/effects";
import { POST_login } from "../../services/user";
import { setToken, cleanToken } from "../../utils/token";
import { message } from "antd";
import { Link } from "react-router-dom";
import { effectError } from "../../utils/handleError";

export function* POST_UserLogout() {
  try {
    console.log("123");
    yield cleanToken();
    message.config({
      maxCount: 1,
    });
    message.success("您已登出！");
    window.location.replace("/login");
  } catch (error) {
    console.log(error);
  }
}

function* POST_UserLogin({ payload, callback, loading }) {
  try {
    if (loading) loading(true);
    const response = yield call(POST_login, payload);
    yield setToken(response.token);
    message.success(response.message);
    window.location.replace("/");
    if (loading) loading(false);
    if (callback) callback();
  } catch (error) {
    if (loading) loading(false);
    yield effectError(error);
  }
}

export default function* watchPOST_UserLogin() {
  yield takeLatest("POST_UserLogin", POST_UserLogin);
}
