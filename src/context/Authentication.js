import { createContext, useEffect, useState } from "react";

const Auth = createContext(null);

function AuthProvider({ children }) {
  const [state, setState] = useState(
    JSON.parse(window.localStorage.getItem("token"))
  );

  useEffect(() => {
    if (state) {
      window.localStorage.setItem("token", state);
    } else {
      window.localStorage.removeItem("token");
    }
  }, [state]);

  return <Auth.Provider value={{ state, setState }}>{children}</Auth.Provider>;
}

export { Auth, AuthProvider };
