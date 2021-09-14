import "./LogIn.css";
import { useRef } from "react";
import { Lock } from "@material-ui/icons";
import useAuth from "../../hooks/useAuth";

// material ui

const LogIn = () => {
  const [setToken] = useAuth(true);
  const subdomain = useRef();
  const username = useRef();
  const password = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = `_username=${username.current.value}&_password=${password.current.value}&_subdomain=${subdomain.current.value}`;

    fetch(`https://face.ox-sys.com/security/auth_check`, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((dataArr) => {
        if (dataArr.code === 401) {
        } else {
          // setToken(JSON.stringify(dataArr.token));
          setToken(dataArr.token);
        }
      });

    subdomain.current.value = "";
    username.current.value = "";
    password.current.value = "";
  };

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <Lock className="lock" />
        <input
          ref={subdomain}
          className="form__input"
          type="text"
          placeholder="Your company"
          required
        />

        <input
          ref={username}
          className="form__input"
          type="text"
          placeholder="username"
          required
        />

        <input
          ref={password}
          className="form__input"
          type="password"
          placeholder="password"
          required
        />
        <button className="form__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;
