import React from 'react';
import style from './game.module.css';
import Control from './control/control';
import GameWindow from "./gameWindow/gameWindow";
import Statictic from "./statistic/statictic";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {updateDirection} from "../../reducer/reducer";

const Game = (props) => {
    const dispatch = useDispatch();

    const changeDirection = (direction) => {
        dispatch(updateDirection(direction));
    }

    useEffect(() => {
        window.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case 38:
                    changeDirection('up');
                    break;
                case 39:
                    changeDirection('right');
                    break;
                case 40:
                    changeDirection('down');
                    break;
                case 37:
                    changeDirection('left');
                    break;
            }
        })
    }, []);

    return(
        <div className={style.gameContainer}>
            <div className={style.sidePanel}>
                <Statictic value={props.score} name="Score" />
                <Statictic value={props.highScore} name="Highscore" />
                <Control />
            </div>
            <GameWindow direction={props.direction} score={props.score}  />
        </div>
    );
}

export default Game;