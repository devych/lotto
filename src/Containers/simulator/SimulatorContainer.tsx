/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Simulator from "../../compoenets/simulator/Simulator";
import Loading from "../../compoenets/utiliies/Loading";
import Axios from "axios";
import { ILotto, IWinList } from "../../interfaces/interfaces";
import { SimulatorGame } from "../../logic/Simulator";

const SimulatorContainer = () => {
    const [isFetched, setIsFetched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [simulationRound, setSimulationRound] = useState(0);
    const [lotto, setLotto] = useState<Array<ILotto>>([]);
    const [selectedLotto, setSelectedLotto] = useState<ILotto | null>(null);
    const [curRound, setCurRound] = useState(0);
    const [simul, setSimul] = useState<SimulatorGame | null>(null);
    const [progress, setProgress] = useState(0);
    const [winList, setWinList] = useState<Array<IWinList>>([
        { rank: 1, list: [] },
        { rank: 2, list: [] },
        { rank: 3, list: [] },
        { rank: 4, list: [] },
        { rank: 5, list: [] },
    ]);

    const fetchData = async () => {
        try {
            setIsFetched(false);
            setLoading(true);
            const response = await Axios.get(
                "http://13.124.128.25:5000/lotto/all"
            );
            let data = response.data.data.reverse();
            setLotto(data);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [isFetched]);

    const checkSimulationSetting = () => {
        if (selectedLotto && simulationRound) {
            const {
                drwtNo1,
                drwtNo2,
                drwtNo3,
                drwtNo4,
                drwtNo5,
                drwtNo6,
                bnusNo,
            } = selectedLotto;
            const winLotto = [
                drwtNo1,
                drwtNo2,
                drwtNo3,
                drwtNo4,
                drwtNo5,
                drwtNo6,
                bnusNo,
            ];
            setSimul(new SimulatorGame(simulationRound, 0, 10, winLotto));
        }
    };
    useEffect(() => {
        checkSimulationSetting();
    }, [selectedLotto, simulationRound]);

    useEffect(() => {
        const updateProgress = () => {
            let progressNum = ((curRound / simulationRound) * 100).toFixed();
            setProgress(Number(progressNum));
        };
        updateProgress();
    }, [curRound, simulationRound]);

    const handleLotto = (e: string): void => {
        let target = Number(e);
        let filteredLotto = lotto.filter((item) => item.drwNo === target);
        setSelectedLotto(filteredLotto[0]);
        checkSimulationSetting();
    };

    const handleSimulationRound = (e: string) => {
        let target = Number(e);
        setSimulationRound(target);
        checkSimulationSetting();
    };

    const startSimulator = () => {
        simul && simul.start(setCurRound, setWinList, winList);
    };

    const stopSimulator = () => {
        simul && simul.stop();
    };

    // const resetSimulator = () => {
    //     //페이지를 초기화면으로 리다이렉션하면될듯
    //     //페치를 다시받아와야하니까 필요한 스테이트를 초기화 하는것도 괜찮고
    // };

    if (loading) {
        return <Loading />;
    }

    return (
        <Simulator
            lotto={lotto}
            selectedLotto={selectedLotto}
            winList={winList}
            simulationRound={simulationRound}
            curRound={curRound}
            progress={progress}
            handleLotto={handleLotto}
            handleSimulationRound={handleSimulationRound}
            startSimulator={startSimulator}
            stopSimulator={stopSimulator}
        />
    );
};

export default SimulatorContainer;
