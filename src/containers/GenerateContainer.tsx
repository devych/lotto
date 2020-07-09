import React, { useState, useCallback } from "react";
import Axios from "axios";
import Loading from "../compoenets/utiliies/Loading";
import Generate from "../pages/Generate";

const GenerateContainer = () => {
    const [count, setCount] = useState(0);
    const [lottoBalls, setLottoBalls] = useState<Array<number>[]>([]);
    const [fixBall, setFixBall] = useState<Array<number>>([]);
    const [removeBall, setRemoveBall] = useState<Array<number>>([]);
    const [loading, setLoading] = useState(false);

    const handleCount = useCallback((evtKey: string) => {
        let num = Number(evtKey);
        setCount(num);
    },[])

    const fetchLotto = useCallback(async (num: number = 1) => {
        setLoading(true);
        const response = await Axios.post(
            `http://13.124.128.25:5000/lotto/generate/${num}`,
            { fix: fixBall, remove: removeBall }
        );
        setLottoBalls(response.data.data);
        setFixBall([]);
        setRemoveBall([]);
        setLoading(false);
    },[fixBall, removeBall])

    const handleLotto = useCallback(() => {
        if (count) {
            fetchLotto(count);
        } else {
            fetchLotto();
        }
    },[count, fetchLotto])

    const handleFixBall = useCallback((event: React.MouseEvent<HTMLSpanElement>): void => {
        let target = event.target as HTMLSpanElement;
        let ball = Number(target.innerHTML);
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
                target.style.border = "";
                target.style.backgroundColor = "";
                target.style.color = "";
                return;
            }
            alert("적어도 하나의 번호는 운에 맡겨보세요!");
            return;
        }
        if (fixBall.includes(ball)) {
            let tempFixBall = [...fixBall];
            tempFixBall.splice(tempFixBall.indexOf(ball), 1);
            setFixBall(tempFixBall);
            target.style.border = "";
            target.style.backgroundColor = "";
            target.style.color = "";
        } else {
            setFixBall([...fixBall, ball]);
            target.style.backgroundColor = "black";
            target.style.color = "white";
        }
    },[fixBall, removeBall])

    const handleRemoveBall = useCallback(
        (event: React.MouseEvent<HTMLSpanElement>): void => {
            let target = event.target as HTMLElement;
            let ball = Number(target.innerHTML);
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
                    target.style.border = "";
                    target.style.backgroundColor = "";
                    target.style.color = "";
                    return;
                }
                alert("번호를 이렇게 많이 제거하면 번호가 생성되지 않아요!");
                return;
            }
            if (removeBall.includes(ball)) {
                let tempRemoveBall = [...removeBall];
                tempRemoveBall.splice(tempRemoveBall.indexOf(ball), 1);
                setRemoveBall(tempRemoveBall);
                target.style.border = "";
                target.style.backgroundColor = "";
                target.style.color = "";
            } else {
                setRemoveBall([...removeBall, ball]);
                target.style.backgroundColor = "white";
                target.style.color = "black";
            }
        },
        [fixBall, removeBall]
    );

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
