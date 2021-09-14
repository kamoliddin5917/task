import { useContext } from "react";
import { Auth } from "../context/Authentication";

const useAuth = (setterOnly) => {
  const ctx = useContext(Auth);

  return setterOnly ? [ctx.setState] : [ctx.state, ctx.setState];
};

export default useAuth;
