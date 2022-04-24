import React, {useState, useEffect} from 'react';
import style from './gameWindow.module.css';
import CharacterCell from "./characterCell/characterCell";

const GameWindow = (props) => {
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    });

    const defineCoordinates = () => {
        let x = 0;
        let y = 0;

        switch (props.direction) {
            case 'up':
                y = -1;
                break;
            case 'right':
                x = 1;
                break;
            case 'down':
                y = 1;
                break;
            case 'left':
                x = -1;
                break;
        }

        return {x, y}
    }

    useEffect(() => {
        const interval = setInterval(() => {

            if ((pos.x > 0 || props.direction !== 'left') &&
                (pos.x < 9 || props.direction !== 'right') &&
                (pos.y > 0 || props.direction !== 'up') &&
                (pos.y < 9 || props.direction !== 'down')) {
                setPos(prevState => {
                    const nextCoordinates = defineCoordinates();

                    return {
                        x: prevState.x + nextCoordinates.x,
                        y: prevState.y + nextCoordinates.y
                    }
                })
            }
            else {
                clearInterval(interval);
            }
        }, 500)

        return () => clearInterval(interval);
    }, [pos]);

    return (
        <div className={style.gameWindow}>
            <CharacterCell pos={pos}/>
        </div>
    );
}

export default GameWindow;