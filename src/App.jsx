import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import CreateGroup from './pages/CreateGroup';
import { AppContext } from './main';
import './index.css';

function App() {
  const [groups, setGroups] = useState([]);

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  return (
    <AppContext.Provider value={{ groups, addGroup }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateGroup />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
