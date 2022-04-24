import React from 'react';
import style from './game.module.css';
import Control from './control/control';
import GameWindow from "./gameWindow/gameWindow";
import Statictic from "./statistic/statictic";

const Game = (props) => {
    return(
        <div className={style.gameContainer}>
            <div className={style.sidePanel}>
                <Statictic value={props.score} name="Score" />
                <Statictic value={props.highScore} name="Highscore" />
                <Control />
            </div>
            <GameWindow direction={props.direction} />
        </div>
    );
}

export default Game;