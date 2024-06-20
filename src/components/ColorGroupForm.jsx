import React, { useState } from 'react';

const ColorGroupForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [colors, setColors] = useState([]);
  const [colorInput, setColorInput] = useState({ colorName: '', colorCode: '' });

  const handleAddColor = () => {
    if (colorInput.colorName && colorInput.colorCode && colors.length < 6) {
      setColors([...colors, colorInput]);
      setColorInput({ colorName: '', colorCode: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && colors.length === 6) {
      onSubmit({ name, colors });
      setName('');
      setColors([]);
    } else {
      alert('Please enter a group name and exactly 6 colors.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="color-group-form">
      <h2>Setting Page</h2>
      <p>Here you can create your own color groups by choosing 6 color names or codes and saving them.</p>
      <div>
        <input
          type="text"
          value={colorInput.colorName}
          onChange={(e) => setColorInput({ ...colorInput, colorName: e.target.value })}
          placeholder="Color Name"
        />
      </div>
      <div>
        <input
          type="text"
          value={colorInput.colorCode}
          onChange={(e) => setColorInput({ ...colorInput, colorCode: e.target.value })}
          placeholder="Color Code"
        />
      </div>
      <button type="button" onClick={handleAddColor} className="add-color-btn">Add Color</button>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Group Name"
          required
        />
      </div>
      <button type="submit" className="save-btn">Save</button>
      <div className="color-preview">
        {colors.map((color, index) => (
          <div key={index} className="color-box" style={{ backgroundColor: color.colorCode }}>
            {color.colorName}
          </div>
        ))}
      </div>
    </form>
  );
};

export default ColorGroupForm;
