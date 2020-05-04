import React, { useState, useEffect } from "react";
import MainPage from "../../compoenets/mainPage/MainPage";
import Axios from "axios";
import Loading from "../../compoenets/utiliies/Loading";
import { ILotto } from "../../interfaces/interfaces";

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
