import React from 'react';
import { connect } from 'react-redux';
import Game from './game';

class GameContainer extends React.Component {
    render() {
        return <Game {...this.props} />;
    }
}

export default GameContainer = connect((state) => state)(GameContainer);