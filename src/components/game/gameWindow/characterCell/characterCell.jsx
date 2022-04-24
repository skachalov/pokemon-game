import React from "react";
import style from "./characterCell.module.css";
import Ash from "../../../../assets/ash.png";


const CharacterCell = (props) => {
    return (
        <img className={style.character}
             style={{marginLeft: `${props.pos.x * 67}px`, marginTop: `${props.pos.y * 67}px`}}
             src={Ash}
        />
    );
}

export default CharacterCell;