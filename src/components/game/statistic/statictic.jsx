import React from 'react';
import style from './statistic.module.css';

const Statictic = (props) => {
    return(
        <div className={style.statistic}>
            <span className={style.value}>{props.value}</span>
            <span className={style.name}>{props.name}</span>
        </div>
    );
}

export default Statictic;