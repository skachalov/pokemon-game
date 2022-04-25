import React from 'react';
import { connect } from 'react-redux';
import GameContainer from './gameContainer';

class GameContainerWrapper extends React.Component {
    render() {
        return <GameContainer {...this.props} />;
    }
}

export default GameContainerWrapper = connect((state) => state)(GameContainerWrapper);