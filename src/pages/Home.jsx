import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../main';

const HomePage = () => {
  const { groups } = useContext(AppContext);

  return (
    <div className="container">
      <h1>Color Collector</h1>
      <Link to="/create">
        <button className="create-button">Create color Box</button>
      </Link>
      {groups.map((group, index) => (
        <div key={index} className="color-group">
          <h3>{group.name}</h3>
          <div className="color-group-colors">
            {group.colors.map((color, idx) => (
              <div key={idx} className="color-box" style={{ backgroundColor: color.colorCode }}>
                {color.colorName}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
