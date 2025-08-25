import React, { useEffect } from 'react';
    import { saveData, loadData } from './storage';

    const Persistence: React.FC = () => {
      useEffect(() => {
        // Simulate saving and loading data
        saveData({ key: 'test', value: 'data' });
        const data = loadData('test');
        console.log(data);
      }, []);

      return (
        <div>Persistence</div>
      );
    };

    export default Persistence;
