import React, { useState, useEffect } from 'react';

    const GameState: React.FC = () => {
      const [gameState, setGameState] = useState<any>(null);

      useEffect(() => {
        // Simulate fetching game state
        setTimeout(() => {
          setGameState({ players: 2, pot: 100 });
        }, 1000);
      }, []);

      return (
        <div>Game State</div>
      );
    };

    export default GameState;
