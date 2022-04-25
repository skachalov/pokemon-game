import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import {updateDirection, updateScore} from "../../../reducer/reducer";
import style from './gameWindow.module.css';
import CharacterCell from "./characterCell/characterCell";

const GameWindow = (props) => {
    let gameInterval;
    const dispatch = useDispatch();

    const [characters, setCharacters] = useState(Array);
    const [pokemon, setPokemon] = useState(Object);
    const [started, setStarted] = useState(false);

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

    const generatePokemon = () => {
        const img = Math.ceil(Math.random() * 13);
        let x, y;

        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } while([...characters].filter(c => c.x === x && c.y === y).length);

        setPokemon(() => { return { x, y, img } });
    }

    const checkCollision = (Ash) => {
        if (Ash.x === pokemon.x && Ash.y === pokemon.y) {
            setCharacters(() => {
                const id = characters.length;

                const nextCoordinates = defineCoordinates(characters[id - 1].current)

                const x = characters[id - 1].x - nextCoordinates.x;
                const y = characters[id - 1].y - nextCoordinates.y;
                const current = props.direction;
                const prev = undefined;
                const img = pokemon.img;

                dispatch(updateScore(props.score + 1));

                return [...characters, { id, x, y, current, prev, img }]
            })
            setPokemon(() => generatePokemon());
        }
    }

    const characterMovement = (pos, Ash) => {
        const direction = props.direction;

        if ((Ash.x < 0 && Ash.current === 'left') ||
            (Ash.x > 9 && Ash.current === 'right') ||
            (Ash.y < 0 && Ash.current === 'up') ||
            (Ash.y > 9 && Ash.current === 'down') ||
            [...characters].filter(c => c.id !== Ash.id
                && c.x === Ash.x && c.y === Ash.y).length) {
            clearInterval(gameInterval);
            setStarted(() => false);
            setPokemon(() => {});
            setCharacters(() => []);
            dispatch(updateScore(0));
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
                    prev, current
                }
            ]
        })
    }

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
                case 32:
                    setStarted(() => true);
                    break;
            }
        })
    }, [])

    useEffect(() => {
        if (!started) return;

        generatePokemon();

        changeDirection('right');
        setCharacters([{id: 0, x: 0, y: 0, current: props.direction, prev: undefined, img: 0}]);
    }, [started]);

    useEffect(() => {
        if (!started) return;

        gameInterval = setInterval(() => {
            const Ash = getAsh()[0];
            [...characters].map(character => characterMovement(character, Ash));
            checkCollision(Ash);
        }, 500)

        return () => clearInterval(gameInterval);
    }, [characters]);


    if (!started) {
        return (
            <div className={style.startWindow}>
                Press  Space  to start the game
            </div>
        );
    }

    return (
        <div className={style.gameWindow}>
            {
                [...characters].map(character => <CharacterCell key={character.id} transition={true} cell={character} />)
            }
            {
                <CharacterCell cell={pokemon} />
            }
        </div>
    );
}

export default GameWindow;