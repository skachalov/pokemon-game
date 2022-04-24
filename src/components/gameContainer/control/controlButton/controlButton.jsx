import React from 'react';
import style from './controlButton.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ControlButton = (props) => {
    return(
        <div className={style.btn}>
            <FontAwesomeIcon icon={props.icon} />
        </div>
    );
}

export default ControlButton;