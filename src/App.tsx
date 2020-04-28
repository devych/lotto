import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavBar from "./Compoenets/Navbar/TopNavBar";
import Footer from "./Compoenets/Footer/Footer";
import MainPageContainer from "./Containers/MainPage/MainPageContainer";
import DrawLottoContainer from "./Containers/DrawLotto/DrawLottoContainer";
import Simulator from "./Compoenets/Simulator/Simulator";
import BallCanceContainer from "./Containers/BallChance/BallCanceContainer";

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
                            <DrawLottoContainer />
                        </Route>
                        <Route path="/ballChance">
                            <BallCanceContainer />
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
