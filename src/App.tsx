import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavBar from "./Compoenets/Navbar/TopNavBar";
import Footer from "./Compoenets/Footer/Footer";
import DrawLotto from "./Compoenets/DrawLotto/DrawLotto";
import MainPageContainer from "./Containers/MainPage/MainPageContainer";
import BallChance from "./Compoenets/BallChance/BallChance";
import Simulator from "./Compoenets/Simulator/Simulator";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="App container">
          <TopNavBar />
          <Switch>
            <Route exact path="/">
              <MainPageContainer />
            </Route>
            <Route path="/drawlotto">
              <DrawLotto />
            </Route>
            <Route path="/ballChance">
              <BallChance />
            </Route>
            <Route path="/simulator">
              <Simulator />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
