import React, { useState, useEffect, useCallback } from "react";
import Axios from "axios";
import BallChance from "../pages/BallChance";
import Loading from "../compoenets/utiliies/Loading";

const BallCanceContainer = () => {
    const [rank, setRank] = useState<Array<number>[] | null>(null);
    const [isBnus, setIsBnus] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async (num = 0) => {
        setLoading(true);
        const fetchLastLotto = await Axios.get(
            `http://13.124.128.25:5000/lotto/all`
        );
        const response = await Axios.get(
            `http://13.124.128.25:5000/lotto/rank/${num}`
        );
        const lastLottoNum = fetchLastLotto.data.data.length;
        let data = response.data.data;
        data = data.map((list: [number, number]) => {
            list.push(Number(((list[1] / lastLottoNum) * 100).toFixed(3)));
            return list;
        });
        setRank(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleBnus = useCallback(() => {
        if (isBnus) {
            fetchData(0);
        } else {
            fetchData(1);
        }
        setIsBnus(!isBnus);
    }, [isBnus]);

    if (loading) {
        return <Loading />;
    }
    return <BallChance rank={rank} isBnus={isBnus} handleBnus={handleBnus} />;
};

export default BallCanceContainer;
