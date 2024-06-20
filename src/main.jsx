import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const AppWrapper = () => {
  const [groups, setGroups] = useState([]);

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  return (
    <AppContext.Provider value={{ groups, addGroup }}>
      <App />
    </AppContext.Provider>
  );
};

const AppContext = React.createContext();

export { AppWrapper, AppContext };
ReactDOM.render(<AppWrapper />, document.getElementById('root'));
