import React from 'react';
import {useDispatch} from 'react-redux';
import {updateDirection} from '../../../../reducer/reducer';
import style from './controlButton.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ControlButton = (props) => {
    const dispatch = useDispatch();

    const changeDirection = () => {
        dispatch(updateDirection(props.direction));
    }

    return(
        <div className={style.btn} onClick={changeDirection} >
            <FontAwesomeIcon icon={props.icon} />
        </div>
    );
}

export default ControlButton;