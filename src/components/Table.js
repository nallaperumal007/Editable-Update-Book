import React, { useState, useEffect } from 'react';
import Button from './Button'; // Adjust the path to where your Button component is located

const initialButtonConfigurations = [
  { label: 'Hi', backgroundColor: 'red', size: 'md' },
  { label: 'Hello', backgroundColor: 'red', size: 'md' },
  { label: 'Bye', backgroundColor: 'red', size: 'md' },
  { label: 'All', backgroundColor: 'red', size: 'md' },
  // Add more configurations as needed
];

const Table = () => {
  const [data, setData] = useState(initialButtonConfigurations);

  // Handle changes in input fields
  const handleChange = (index, key, value) => {
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], [key]: value };
    setData(updatedData);
  };

  // Save data to local storage
  const handleSave = () => {
    localStorage.setItem('tableData', JSON.stringify(data));
  };

  // Load saved data from local storage
  useEffect(() => {
    const savedData = localStorage.getItem('tableData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Label</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Color</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Size</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Button</th>
          </tr>
        </thead>
        <tbody>
          {data.map((config, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <input
                  type="text"
                  value={config.label}
                  onChange={(e) => handleChange(index, 'label', e.target.value)}
                  style={{ border: 'none', width: '100%' }}
                />
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <input
                  type="text"
                  value={config.backgroundColor}
                  onChange={(e) => handleChange(index, 'backgroundColor', e.target.value)}
                  style={{ border: 'none', width: '100%' }}
                />
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <select
                  value={config.size}
                  onChange={(e) => handleChange(index, 'size', e.target.value)}
                  style={{ border: 'none', width: '100%' }}
                >
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                  <option value="lg">Large</option>
                </select>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <Button
                  label={config.label}
                  backgroundColor={config.backgroundColor}
                  size={config.size}
                  handleClick={() => {}}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSave} style={{ marginTop: '16px' }}>Save Changes</button>
    </div>
  );
};

export default Table;
