import { useState, useEffect } from 'react';

function Time() {
    const [isDate, setIsDate] = useState(new Date());
    useEffect(() => {
        const timerID = setInterval(() => { setIsDate(new Date()); }, 1000);;
        return () => clearInterval(timerID);
    }, [isDate]);

    //дата
    let date = () => { if (isDate.getDate() < 10) { return '0' + isDate.getDate() } else { return isDate.getDate() } }; // число
    let month = () => { if ((isDate.getMonth() + 1) < 10) { return '0' + (isDate.getMonth() + 1) } else { return (isDate.getMonth() + 1) } }; // месяц
    let dateNow = date() + '.' + month() + '.' + isDate.getFullYear(); // получить дату;

    // время
    let hours = () => { if (isDate.getHours() < 10) { return '0' + isDate.getHours() } else { return isDate.getHours() } }; // часы
    let minutes = () => { if (isDate.getMinutes() < 10) { return '0' + isDate.getMinutes() } else { return isDate.getMinutes() } }; // минуты
    let seconds = () => { if (isDate.getSeconds() < 10) { return '0' + isDate.getSeconds() } else { return isDate.getSeconds() } }; // секунды
    let timeNow = hours() + ':' + minutes() + ':' + seconds(); // получить время

    return (<p className='header_text'>({dateNow} {timeNow});</p>)


};

export default Time;