// import React from 'react';
import image from '../assets/images/shoes.png';
const colors = ['black', 'white', "white", "white"];
const ShoeType = ({}) => {
  return (
    <div className="shoe-type">
    
      <img src={image} alt={image} className="shoe-image" />
      <div className='shoe_color'>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          className={color}
        >
          {}
        </button>
      )
      )}
      </div>
    </div>
  );
};

export default ShoeType;
