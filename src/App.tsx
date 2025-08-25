import React from 'react';
    import Main from './main';
    import UIManager from './ui_manager';
    import Perception from './perception';
    import Interpreter from './interpreter';
    import GameState from './game_state';
    import DecisionEngine from './decision_engine';
    import Persistence from './persistence';
    import Config from './config';

    const App: React.FC = () => {
      return (
        <div className="App">
          <h1>Real-Time Poker Assistant</h1>
          <Main />
          <UIManager />
          <Perception />
          <Interpreter />
          <GameState />
          <DecisionEngine />
          <Persistence />
          <Config />
        </div>
      );
    };

    export default App;
