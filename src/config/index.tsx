import React from 'react';
    import { loadConfig, saveConfig } from './config';

    const Config: React.FC = () => {
      useEffect(() => {
        // Simulate loading and saving config
        const config = loadConfig();
        console.log(config);
        saveConfig({ theme: 'dark' });
      }, []);

      return (
        <div>Config</div>
      );
    };

    export default Config;
