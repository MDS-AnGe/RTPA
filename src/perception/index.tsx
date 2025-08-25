import React, { useEffect } from 'react';
    import { captureScreen } from './capture';

    const Perception: React.FC = () => {
      useEffect(() => {
        captureScreen();
      }, []);

      return (
        <div>Perception</div>
      );
    };

    export default Perception;
