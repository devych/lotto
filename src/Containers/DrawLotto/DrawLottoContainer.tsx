import React, { useState } from "react";
import DrawLotto from "../../Compoenets/DrawLotto/DrawLotto";
import Axios from "axios";
import Loading from "../../Compoenets/Utiliies/Loading";

interface ICount {
    count: number;
}

const DrawLottoContainer = () => {
    const [count, setCount] = useState(0);
    const [lottoBalls, setLottoBalls] = useState<Array<number>[] | []>([]);
    const [loading, setLoading] = useState(false);

    const handleCount = (evtKey: any) => {
        let num = Number(evtKey);
        setCount(num);
    };

    const fetchLotto = async (num: number = 1) => {
        setLoading(true);
        const response = await Axios.get(
            `http://13.124.128.25:5000/lotto/create/${num}`
        );
        setLottoBalls(response.data.data);
        setLoading(false);
    };

    const handleLotto = () => {
        if (count) {
            fetchLotto(count);
        } else {
            fetchLotto();
        }
    };
    if (loading) {
        return <Loading />;
    }
    return (
        <DrawLotto
            handleCount={handleCount}
            handleLotto={handleLotto}
            lottoBalls={lottoBalls}
            count={count}
        />
    );
};

export default DrawLottoContainer;
