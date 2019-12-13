import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavBar from "./Compoenets/Navbar/TopNavBar";
import Footer from "./Compoenets/Footer/Footer";
import DrawLotto from "./Compoenets/DrawLotto/DrawLotto";
import MainPageContainer from "./Containers/MainPage/MainPageContainer";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="App container-fluid">
          <TopNavBar />
          <Switch>
            <Route exact path="/">
              <MainPageContainer />
            </Route>
            <Route path="/drawlotto">
              <DrawLotto />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
