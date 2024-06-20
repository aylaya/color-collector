import React, { useState, useContext } from 'react';
import { AppContext } from '../main';
import { useNavigate, Link } from 'react-router-dom';

const CreateGroup = () => {
  const [colorName, setColorName] = useState('');
  const [colorCode, setColorCode] = useState('');
  const [groupName, setGroupName] = useState('');
  const [colors, setColors] = useState([]);
  const { addGroup } = useContext(AppContext);
  const navigate = useNavigate();

  const handleAddColor = () => {
    if (colors.length < 6) {
      setColors([...colors, { colorName, colorCode }]);
      setColorName('');
      setColorCode('');
    }
  };

  const handleSaveGroup = () => {
    if (colors.length === 6) {
      addGroup({ name: groupName, colors });
      navigate('/');
    }
  };

  return (
    <div className="container">
      <h1>Create Color Box</h1>
      <Link to="/">
        <button className="back-to-home-button">Back</button>
      </Link>
      <form className="color-group-form">
        <div>
          <input 
            type="text" 
            placeholder="Color Name" 
            value={colorName} 
            onChange={(e) => setColorName(e.target.value)} 
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Color Code" 
            value={colorCode} 
            onChange={(e) => setColorCode(e.target.value)} 
          />
        </div>
        <button type="button" className="add-color-btn" onClick={handleAddColor}>Add Color</button>
        <div>
          <input 
            type="text" 
            placeholder="Group Name" 
            value={groupName} 
            onChange={(e) => setGroupName(e.target.value)} 
          />
        </div>
        <button type="button" className="save-btn" onClick={handleSaveGroup} disabled={colors.length !== 6}>Save</button>
        <div className="color-preview">
          {colors.map((color, idx) => (
            <div key={idx} className="color-box" style={{ backgroundColor: color.colorCode }}>
              {color.colorName}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
