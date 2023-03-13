import { Route, Switch } from "react-router-dom";
import Aboutuspage from "./pages/Aboutuspage";
import Contactspage from "./pages/Contactspage";
import Game from "./pages/Game";
import Greetings from "./pages/Greetings";
import Moreuserinfo from "./pages/Moreuserinfo";
import Newspage from "./pages/Newspage";
import Onepost from "./pages/Onepost";
import Welcomepage from "./pages/Welcomepage";

function App() {
  return (
    <Switch>
      <Route path="/contacts/:id">
        <Moreuserinfo />
      </Route>
      <Route exact path="/">
        <Welcomepage />
      </Route>
      <Route path="/news">
        <Newspage />
      </Route>
      <Route path="/contacts">
        <Contactspage />
      </Route>
      <Route path="/aboutus">
        <Aboutuspage />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/greetings">
        <Greetings />
      </Route>
      <Route path="/onepost/:id">
        <Onepost />
      </Route>
    </Switch>
  );
}

export default App;
