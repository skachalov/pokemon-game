import './App.css';
import Title from './components/title/title';
import GameContainer from './components/game/gameContainerWrapper';

function App() {
    return (
        <div className="App">
            <Title title="pokemon game" />
            <div className="content">
                <GameContainer />
            </div>
            <Title title="developed by Sergey Kachalov" />
        </div>
    );
}

export default App;
