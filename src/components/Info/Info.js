import React, { useState, useEffect } from 'react'
import Timer from './../../utils/Timer/Timer';
import Timer1 from '../../utils/Timer/Timer1';

function Info() {

    //таймер

    return (
        <div className='info'>
            <p className='info_text'>Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанные в таблице:</p>
            <div className='info_motion'>
                {/* <Timer1 /> */}
                {/* <Timer /> */}
            </div>
        </div>
    );
}

export default Info;