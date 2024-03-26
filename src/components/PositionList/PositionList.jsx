import { useState, useEffect } from 'react';
import './positionList.css';

export const PositionList = ({ handlePositionChange }) => {
  const [positions, setPositions] = useState(null);

  useEffect(() => {
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPositions(data.positions);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="options">
      {positions &&
        positions.map((position, index) => {
          return (
            <label key={position.id}>
              <input
                type="radio"
                name="option"
                className="real-radio"
                value={position.id}
                onChange={handlePositionChange}
              />
              <span className="castom-radio"></span>
              {position.name}
            </label>
          );
        })}
    </div>
  );
};
