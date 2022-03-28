import request from "../utils/request";

export function POST_login(payload) {
  return request.post("/user", payload);
}
