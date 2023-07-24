import PropTypes from 'prop-types';
import "../styles/components/InputField.scss"

const InputField = ({ label, type, max, value, onChange, error,placeholder}) => {
  const hasError = Boolean(error); // check if there is an error
  console.log(hasError);

  return (
    <div className={`input-field ${hasError ? 'input-field--error' : ''}`}>
      <label>{label}</label>
      <div className={`input-container ${hasError ? 'input-container--error' : ''}`}>
        <input type={type} max={max} value={value} onChange={onChange} placeholder={placeholder} />
      </div>
    </div>
  );
}



InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  max: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string
};

export default InputField;