import React, { useState, MouseEvent } from "react";
import Axios from "axios";
import Loading from "../compoenets/utiliies/Loading";
import Generate from "../pages/Generate";

const GenerateContainer = () => {
    const [count, setCount] = useState(0);
    const [lottoBalls, setLottoBalls] = useState<Array<number>[]>([]);
    const [fixBall, setFixBall] = useState<Array<number>>([]);
    const [removeBall, setRemoveBall] = useState<Array<number>>([]);
    const [loading, setLoading] = useState(false);

    const handleCount = (evtKey: string) => {
        let num = Number(evtKey);
        setCount(num);
    };

    const fetchLotto = async (num: number = 1) => {
        setLoading(true);
        const response = await Axios.post(
            `http://13.124.128.25:5000/lotto/generate/${num}`,
            { fix: fixBall, remove: removeBall }
        );
        setLottoBalls(response.data.data);
        setFixBall([]);
        setRemoveBall([]);
        setLoading(false);
    };

    const handleLotto = () => {
        if (count) {
            fetchLotto(count);
        } else {
            fetchLotto();
        }
    };

    const handleFixBall = (e: MouseEvent) => {
        let ball = Number(e.target.innerHTML);
        if (removeBall.includes(ball)) {
            alert(
                `제외 번호에 설정되어있는 번호에요!
다시 확인해주세요`
            );
            return;
        }

        if (fixBall.length > 4) {
            if (fixBall.includes(ball)) {
                let tempFixBall = [...fixBall];
                tempFixBall.splice(tempFixBall.indexOf(ball), 1);
                setFixBall(tempFixBall);
                e.target.style.border = "";
                e.target.style.backgroundColor = "";
                e.target.style.color = "";
                return;
            }
            alert("적어도 하나의 번호는 운에 맡겨보세요!");
            return;
        }
        if (fixBall.includes(ball)) {
            let tempFixBall = [...fixBall];
            tempFixBall.splice(tempFixBall.indexOf(ball), 1);
            setFixBall(tempFixBall);
            e.target.style.border = "";
            e.target.style.backgroundColor = "";
            e.target.style.color = "";
        } else {
            setFixBall([...fixBall, ball]);
            e.target.style.backgroundColor = "black";
            e.target.style.color = "white";
        }
    };

    const handleRemoveBall = (e: MouseEvent) => {
        let ball = Number(e.target.innerHTML);
        if (fixBall.includes(ball)) {
            alert(
                `고정 번호에 설정되어있는 번호에요!
다시 확인해주세요`
            );
            return;
        }
        if (removeBall.length > 38) {
            if (removeBall.includes(ball)) {
                let tempRemoveBall = [...removeBall];
                tempRemoveBall.splice(tempRemoveBall.indexOf(ball), 1);
                setRemoveBall(tempRemoveBall);
                e.target.style.border = "";
                e.target.style.backgroundColor = "";
                e.target.style.color = "";
                return;
            }
            alert("번호를 이렇게 많이 제거하면 번호가 생성되지 않아요!");
            return;
        }
        if (removeBall.includes(ball)) {
            let tempRemoveBall = [...removeBall];
            tempRemoveBall.splice(tempRemoveBall.indexOf(ball), 1);
            setRemoveBall(tempRemoveBall);
            e.target.style.border = "";
            e.target.style.backgroundColor = "";
            e.target.style.color = "";
        } else {
            setRemoveBall([...removeBall, ball]);
            e.target.style.backgroundColor = "white";
            e.target.style.color = "black";
        }
    };

    if (loading) {
        return <Loading />;
    }
    return (
        <Generate
            handleCount={handleCount}
            handleLotto={handleLotto}
            handleFixBall={handleFixBall}
            handleRemoveBall={handleRemoveBall}
            lottoBalls={lottoBalls}
            count={count}
        />
    );
};

export default GenerateContainer;
