import React, { useState } from 'react';
import PropTypes from "prop-types";
import './Select.css';

function Select2({ options, onChange, style }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    onChange(value); // Llamar a la función onChange cuando se selecciona una opción.
  };

  return (
    <div className="select-container" style = {style}>
      <div className="select-display" onClick={toggling}>
        <div>{selectedOption || options[0]}</div>
        <div>{isOpen ? '▲' : '▼'}</div>
      </div>
      {isOpen && (
        <div className="select-dropdown">
          {options.map((option) => (
            <div className="select-option" onClick={onOptionClicked(option)} key={Math.random()}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Setting default values for the props of GradientLineChart
Select2.defaultProps = {
  options: ["",""],
  onChange: "",
  style:{},
};
// Typechecking props for the GradientLineChart
Select2.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  style: PropTypes.object
};

export default Select2;
