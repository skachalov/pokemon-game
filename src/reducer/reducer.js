const UPDATE_SCORE = 'UPDATE_SCORE';
const UPDATE_HIGHSCORE = 'UPDATE_HIGHSCORE';
const UPDATE_DIRECTION = 'UPDATE_DIRECTION';

let initialState = {
    score: 0,
    highScore: 0,
    direction: 'right'
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SCORE:
            return {
                ...state,
                score: action.score
            };
        case UPDATE_HIGHSCORE:
            return {
                ...state,
                highScore: action.highScore
            };
        case UPDATE_DIRECTION:
            return {
                ...state,
                direction: action.direction
            }
        default:
            return state;
    }
}

export const updateScore = (score) => ({ type: UPDATE_SCORE, score });
export const updateHighscore = (highscore) => ({ type: UPDATE_HIGHSCORE, highscore });
export const updateDirection = (direction) => ({ type: UPDATE_DIRECTION, direction });