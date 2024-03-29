import React, { useState, useEffect, useCallback } from "react";
import MainPage from "../pages/MainPage";
import Axios from "axios";
import Loading from "../compoenets/utiliies/Loading";
import { ILotto } from "../interfaces/interfaces";

const MainPageContainer = () => {
    let [lotto, setLotto] = useState<ILotto[]>([]);
    let [createdLottoWin, SetCreatedLottoWin] = useState<
        [[number, number, string, string, number[], number[], string]] | []
    >([]);
    let [selectedLotto, setSelectedLotto] = useState<ILotto | null>(null);
    let [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const responseLotto = await Axios.get(
                "http://13.124.128.25:5000/lotto/all"
            );
            const responseCreatedLotto = await Axios.get(
                "http://13.124.128.25:5000/lotto/check"
            );
            let createdLotto = responseCreatedLotto.data.data;
            SetCreatedLottoWin(createdLotto);
            let data = responseLotto.data.data.reverse();
            setLotto(data);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    },[])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleLotto = useCallback((e: string): void => {
        let target = Number(e);
        let filteredLotto = lotto.filter((item) => item.drwNo === target);
        setSelectedLotto(filteredLotto[0]);
    },[lotto])

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <MainPage
                lotto={lotto}
                selectedLotto={selectedLotto}
                createdLottoWin={createdLottoWin}
                onSelect={handleLotto}
            />
        </>
    );
};

export default MainPageContainer;
