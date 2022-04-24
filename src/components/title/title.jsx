import React from 'react';
import style from './title.module.css';

const Title = (props) => {
    return (
        <div className={style.title}>
            <h5>{props.title}</h5>
        </div>
    );
}

export default Title;