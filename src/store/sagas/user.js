import { takeLatest, call } from "redux-saga/effects";
import { POST_login } from "../../services/user";
import { setToken } from "../../utils/token";
import { message } from "antd";

function* POST_UserLogin({ payload, callback, loading }) {
  try {
    if (loading) loading(true);
    console.log("===POST_login===", payload);
    const response = yield call(POST_login, payload);
    yield setToken(response.token);
    message.success(response.message);
    if (loading) loading(false);
    if (callback) callback();
  } catch (error) {
    if (loading) loading(false);
  }
}

export default function* watchPOST_UserLogin() {
  yield takeLatest("POST_UserLogin", POST_UserLogin);
}
