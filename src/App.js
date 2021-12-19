import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as Routes from "../src/Constants/Routes";

import Onboardingview from "../src/Views/OnboardingView";
import HomeView from "./Views/HomeView";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={Routes.ONBOARDING}>
            <Onboardingview />
          </Route>
          <Route exact path={Routes.HOME}>
            <HomeView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
