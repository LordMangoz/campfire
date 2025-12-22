import React, { useState, useRef } from "react";

const Timer = () => {
    const Ref = useRef(null);

    const [timer, setTimer] = useState("00:00:00");

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(10);

    const clamp = (value) => Math.max(0, value);

    const getTotalSeconds = () =>
        hours * 3600 + minutes * 60 + seconds;

    const getDeadTime = (totalSeconds) => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + totalSeconds);
        return deadline;
    };

    const getTimeRemaining = (endTime) => {
        const total = Date.parse(endTime) - Date.parse(new Date());

        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60));

        return { total, hours, minutes, seconds };
    };

    const startTimer = (endTime) => {
        const { total, hours, minutes, seconds } =
            getTimeRemaining(endTime);

        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : "0" + hours) + ":" +
                (minutes > 9 ? minutes : "0" + minutes) + ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (endTime) => {
        if (Ref.current) clearInterval(Ref.current);

        const id = setInterval(() => {
            startTimer(endTime);
        }, 1000);

        Ref.current = id;
    };

    const onClickStart = () => {
        const total = getTotalSeconds();
        if (total <= 0) return;

        clearTimer(getDeadTime(total));
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>{timer}</h2>

            <div>
                <input
                    type="number"
                    min="0"
                    value={hours}
                    onChange={(e) => setHours(clamp(+e.target.value))}
                     style={{
                        width: "60px",
                    }}
                /> :
                <input
                    type="number"
                    min="0"
                    value={minutes}
                    onChange={(e) => setMinutes(clamp(+e.target.value))}
                     style={{
                        width: "60px",
                    }}
                /> :
                <input
                    type="number"
                    min="0"
                    value={seconds}
                    onChange={(e) => setSeconds(clamp(+e.target.value))}
                    style={{
                        width: "60px",
                    }}
                />
            </div>

            <button onClick={onClickStart}>
                Start / Reset
            </button>
        </div>
    );
};

export default Timer;