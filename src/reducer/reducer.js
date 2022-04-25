const UPDATE_SCORE = 'UPDATE_SCORE';
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
                score: action.score,
                highScore: action.score > state.highScore
                    ? action.score
                    : state.highScore
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
export const updateDirection = (direction) => ({ type: UPDATE_DIRECTION, direction });