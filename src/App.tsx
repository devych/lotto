import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavBar from "./compoenets/navbar/TopNavBar";
import Footer from "./compoenets/footer/Footer";
import MainPageContainer from "./containers/mainPage/MainPageContainer";
import DrawLottoContainer from "./containers/drawLotto/DrawLottoContainer";
import BallCanceContainer from "./containers/ballChance/BallCanceContainer";
import SimulatorContainer from "./containers/simulator/SimulatorContainer";

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
                            <SimulatorContainer />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer />
        </>
    );
};

export default App;
