import React, { useState, useEffect } from 'react'
// import Timer from './../../utils/Timer/Timer' 

function Info() {

    //таймер

    const [over, setOver] = useState(false);
    const [[hours, minutes, seconds], setTime] = useState([0, 7, 60]);

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
        setTime([parseInt(0), parseInt(7), parseInt(60)]);
        setOver(true);
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, [over, seconds]); // ставлю зависимость, чтобы обновлялся при изменении секунд и при изменении вкл выкл таймер. - ускоряется 

    return (
        <div className='info'>
            <p className='info_text'>Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанные в таблице:</p>
            <div className='info_motion'>
                <p className='info_motion-text'>ХОД</p>
                <div className='info_timer'>{seconds}</div> 
                {/* <Timer /> */}
            </div>
        </div>
    );
}

export default Info;