import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopNavBar from "./Containers/Navbar/TopNavBar";
import MainPage from "./Containers/MainPage/MainPage";
import Footer from "./Containers/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="App">
          <TopNavBar />
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
