import React from 'react';
import style from './gameContainer.module.css';
import Control from './control/control';
import GameWindow from './gameWindow/gameWindow';
import Statictic from './statistic/statictic';

const GameContainer = (props) => {
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

export default GameContainer;