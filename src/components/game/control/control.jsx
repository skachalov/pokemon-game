import React from 'react';
import style from './control.module.css';
import ControlButton from './controlButton/controlButton';
import { faArrowUp, faArrowRight,
        faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Control = () => {
    return(
        <div className={style.control}>
            <div>
                <ControlButton icon={faArrowUp} direction='up' />
            </div>
            <div className={style.horizontalLayer}>
                <ControlButton icon={faArrowLeft} direction='left' />
                <ControlButton icon={faArrowRight} direction='right' />
            </div>
            <div>
                <ControlButton icon={faArrowDown} direction='down' />
            </div>
        </div>
    );
}

export default Control;