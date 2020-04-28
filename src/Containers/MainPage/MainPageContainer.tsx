import React, { useState, useEffect } from "react";
import MainPage from "../../Compoenets/MainPage/MainPage";
import Axios from "axios";
import Loading from "../../Compoenets/Utiliies/Loading";

export interface ILotto {
    bnusNo: number;
    drwNo: number;
    drwNoDate: string;
    drwtNo1: number;
    drwtNo2: number;
    drwtNo3: number;
    drwtNo4: number;
    drwtNo5: number;
    drwtNo6: number;
    firstAccumamnt: string;
    firstPrzwnerCo: number;
    firstWinamnt: number;
    id: number;
    totSellamnt: number;
}

const MainPageContainer = () => {
    let [lotto, setLotto] = useState<ILotto[]>([]);
    let [selectedLotto, setSelectedLotto] = useState<ILotto | null>(null);
    let [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
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
    }, []);

    const handleLotto = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let target = Number(e);
        let filteredLotto = lotto.filter((item) => item.drwNo === target);
        setSelectedLotto(filteredLotto[0]);
    };

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <MainPage
                lotto={lotto}
                selectedLotto={selectedLotto}
                onSelect={handleLotto}
            />
        </>
    );
};

export default MainPageContainer;
