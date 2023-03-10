import { Route, Switch } from "react-router-dom";
import Welcomepage from "./pages/Welcomepage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Welcomepage />
      </Route>
    </Switch>
  );
}

export default App;
