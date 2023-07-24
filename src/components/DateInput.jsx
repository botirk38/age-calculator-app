import { useState } from 'react';
import InputField from './InputField';
import PropTypes from 'prop-types';
import arrow from "../assets/images/icon-arrow.svg"
import "../styles/components/DateInput.scss"

const DateInput = ({ onCalculateClick }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState({});

  const validateDate = (day, month, year) => {
    let errors = {};
    if (!day || day === "") {
      errors.day = "This field is required.";
    }
    if (!month || month === "") {
      errors.month = "This field is required.";
    }
    if (!year || year === "") {
      errors.year = "This field is required.";
    }
    if (day !== "" && month !== "" && year !== "") {
      const currentDate = new Date();
      const inputDate = new Date(year, month - 1, day);
      if (inputDate > currentDate) {
        errors.day = "Birth date cannot be in the future.";
      }
      if (day < 1 || day > 31) {
        errors.day = "Day should be between 1 and 31.";
      }
      if (month < 1 || month > 12) {
        errors.month = "Month should be between 1 and 12.";
      }
      if (year < 1 || year > currentDate.getFullYear()) {
        errors.year = "Year should be a valid year.";
      }
    }
    return Object.keys(errors).length ? errors : null;
  };
  
  const handleCalculate = () => {
    const date = { day, month, year };
    const errorMessage = validateDate(day, month, year);
    if (errorMessage) {
      setError(errorMessage);
      onCalculateClick(null, errorMessage);  // Pass errors to parent
      return;
    }
    setError({});
    onCalculateClick(date, null);  // No errors, calculate age
  };

  const handleChange = (setter) => (e) => setter(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();  
    handleCalculate();  // Call the handleCalculate function
  };

  return (
    <div className="date-input">
    <form onSubmit={handleFormSubmit}>
      <div className="inputField-container">
      <InputField type="number" max={31} value={day} onChange={handleChange(setDay)} label="DAY" error={error.day} placeholder="DD"/>
      {error.day && <div className="error-message">{error.day}</div>}
      </div>  
      <div className="inputField-container">
      <InputField type="number" max={12} value={month} onChange={handleChange(setMonth)}  label="MONTH" error={error.month} placeholder="MM"/>
      {error.month && <div className="error-message">{error.month}</div>}
      </div>
      <div className="inputField-container">
      <InputField type="number" max={new Date().getFullYear()} value={year} onChange={handleChange(setYear)} label="YEAR" error={error.year} placeholder="YYYY" />
      {error.year && <div className="error-message">{error.year}</div>}
      </div>
      <button type="submit" onClick={handleCalculate}><img src={arrow} alt="Calculate Age"></img></button>
    </form>
    </div>
  );
};

DateInput.propTypes = {
  onCalculateClick: PropTypes.func.isRequired,
}

export default DateInput;
