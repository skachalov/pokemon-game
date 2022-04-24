import React from 'react';
import style from './gameContainer.module.css';
import Control from './control/control';
import GameWindow from "./gameWindow/gameWindow";
import Statictic from "./statistic/statictic";

const gameContainer = () => {
    return(
        <div className={style.gameContainer}>
            <div className={style.sidePanel}>
                <Statictic value="2" name="Score" />
                <Statictic value="7" name="Highscore" />
                <Control />
            </div>
            <GameWindow />
        </div>
    );
}

export default gameContainer;