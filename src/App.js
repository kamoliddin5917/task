import "./App.css";

import { Switch } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";

import Public from "./routes/Public";
import Private from "./routes/Private";

function App() {
  return (
    <div className="App">
      <Switch>
        <Public path="/login" component={LogIn} />
        <Private path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
