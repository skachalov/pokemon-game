import React, {useState, useEffect} from 'react';
import style from './gameWindow.module.css';
import CharacterCell from "./characterCell/characterCell";

const GameWindow = (props) => {
    let gameInterval;

    const [characters, setCharacters] = useState(Array);
    const [pokemon, setPokemon] = useState(Object);

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
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

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
            (Ash.y > 9 && Ash.current === 'down')) {
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
                    prev, current
                }
            ]
        })
    }

    useEffect(() => {
        generatePokemon();
        setCharacters([{id: 0, x: 2, y: 0, current: props.direction, prev: undefined, img: 0}]);
    }, []);

    useEffect(() => {
        gameInterval = setInterval(() => {
            const Ash = getAsh()[0];
            [...characters].map(character => characterMovement(character, Ash));
            checkCollision(Ash);
        }, 500)

        return () => clearInterval(gameInterval);
    }, [characters]);

    return (
        <div className={style.gameWindow}>
            {
                [...characters].map(character => <CharacterCell key={character.id} cell={character} />)
            }
            {
                <CharacterCell cell={pokemon} />
            }
        </div>
    );
}

export default GameWindow;