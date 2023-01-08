import { useState, useEffect } from "react";

function Timer({ hoursInstalled = 0, minutesInstalled = 2, secondsInstalled = 0, resetInstalled }) {
    const [over, setOver] = useState(false);
    const [[hours, minutes, seconds], setTime] = useState([hoursInstalled, minutesInstalled, secondsInstalled]);

    const tick = () => {
        if (over) return;
        if (hours === 0 && minutes === 0 && seconds === 0) {
            setOver(true);
        } else if (minutes === 0 && seconds === 0) {
            setTime([hours - 1, 59, 59]);
        } else if (seconds === 0) {
            setTime([hours, minutes - 1, 59]);
        } else {
            setTime([hours, minutes, seconds - 1]);
        }
    };

    const reset = () => {
        setTime([parseInt(hoursInstalled), parseInt(minutesInstalled), parseInt(secondsInstalled)]);
        setOver(false);
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, [over, seconds]);

    useEffect(() => {
        reset();
    }, [resetInstalled])

    return (
        <h2 className='info_timer'>
            {hours > 9 ? hours : '0' + hours}
            :{minutes > 9 ? minutes : '0' + minutes}
            :{seconds > 9 ? seconds : '0' + seconds}
        </h2>
    )
}

export default Timer;