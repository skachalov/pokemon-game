import React from "react";
import style from "./characterCell.module.css";
import Ash from '../../../../assets/ash.png';
import Pokemon1 from '../../../../assets/pokemons/1.png';
import Pokemon2 from '../../../../assets/pokemons/2.png';
import Pokemon3 from '../../../../assets/pokemons/3.png';
import Pokemon4 from '../../../../assets/pokemons/4.png';
import Pokemon5 from '../../../../assets/pokemons/5.png';
import Pokemon6 from '../../../../assets/pokemons/6.png';
import Pokemon7 from '../../../../assets/pokemons/7.png';
import Pokemon8 from '../../../../assets/pokemons/8.png';
import Pokemon9 from '../../../../assets/pokemons/9.png';
import Pokemon10 from '../../../../assets/pokemons/10.png';
import Pokemon11 from '../../../../assets/pokemons/11.png';
import Pokemon12 from '../../../../assets/pokemons/12.png';
import Pokemon13 from '../../../../assets/pokemons/13.png';

const CharacterCell = (props) => {
    if (props.cell === undefined) return;

    let img;
    switch (props.cell.img) {
        case 0:
            img = Ash; break;
        case 1:
            img = Pokemon1; break;
        case 2:
            img = Pokemon2; break;
        case 3:
            img = Pokemon3; break;
        case 4:
            img = Pokemon4; break;
        case 5:
            img = Pokemon5; break;
        case 6:
            img = Pokemon6; break;
        case 7:
            img = Pokemon7; break;
        case 8:
            img = Pokemon8; break;
        case 9:
            img = Pokemon9; break;
        case 10:
            img = Pokemon10; break;
        case 11:
            img = Pokemon11; break;
        case 12:
            img = Pokemon12; break;
        case 13:
            img = Pokemon13; break;
    }

    return (
        <img className={`${style.character} ${
            props.transition ? style.characterTransition : ''
        } ${props.cell.current === 'left' || props.cell.current === 'down' ? style.left : style.right}`}
             style={{marginLeft: `${props.cell.x * 67}px`, marginTop: `${props.cell.y * 67}px`}}
             src={img}
        />
    );
}

export default CharacterCell;