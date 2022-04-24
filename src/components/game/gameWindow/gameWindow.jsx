import React, {useState, useEffect} from 'react';
import style from './gameWindow.module.css';
import CharacterCell from "./characterCell/characterCell";

const GameWindow = (props) => {
    let gameInterval;

    const [characters, setCharacters] = useState(Array);
    const [lose, setLose] = useState(false);

    const defineCoordinates = (direction) => {
        let x = 0;
        let y = 0;

        switch (direction) {
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

    const getAsh = () => {
        return characters.filter(val => val.id === 0);
    }

    const characterMovement = (pos) => {
        const direction = props.direction;

        if ((getAsh()[0].x < 0 && getAsh()[0].current === 'left') ||
            (getAsh()[0].x > 9 && getAsh()[0].current === 'right') ||
            (getAsh()[0].y < 0 && getAsh()[0].current === 'up') ||
            (getAsh()[0].y > 9 && getAsh()[0].current === 'down')) {
            clearInterval(gameInterval);
            return;
        }

        setCharacters(() => {
            let nextCoordinates;
            let current, prev = pos.current;

            if (pos.id === 0) {
                nextCoordinates = defineCoordinates(direction);
                current = direction;
            } else {
                nextCoordinates = defineCoordinates(characters[pos.id - 1].prev);
                current = characters[pos.id - 1].prev;
            }

            let array = characters.filter((val, index) => index !== pos.id);

            return [
                ...array,
                characters[pos.id] = {
                    ...characters[pos.id],
                    x: characters[pos.id].x + nextCoordinates.x,
                    y: characters[pos.id].y + nextCoordinates.y,
                    prev: prev,
                    current: current
                }
            ]
        })
    }

    useEffect(() => {
        setCharacters([{id: 0, x: 2, y: 0, current: props.direction, prev: props.direction},
            {id: 1, x: 1, y: 0, prev: props.direction, current: props.direction},
            {id: 2, x: 0, y: 0, prev: props.direction, current: props.direction}]);
    }, []);

    useEffect(() => {


        gameInterval = setInterval(() => {
            characters.map(character => characterMovement(character));
        }, 500)

        return () => clearInterval(gameInterval);
    }, [characters]);

    return (
        <div className={style.gameWindow}>
            {
                characters.map(character => <CharacterCell key={character.id} pos={character} />)
            }
        </div>
    );
}

export default GameWindow;