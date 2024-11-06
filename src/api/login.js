import { LOGIN_USER } from "../utils/constants";

const loginUser = (username, password) => {
  return fetch(LOGIN_USER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  });
};

export default loginUser;
