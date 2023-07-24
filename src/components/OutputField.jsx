import PropTypes from 'prop-types';
import "../styles/components/OutputField.scss"

const OutputField = ({ age }) => {
    const { years = "--", months = "--", days = "--" } = age || {};
    const hasAge = Boolean(age);
    
    return (
      <div className={`output-field-container ${hasAge ? 'age-present' : ''}`}>
        <div className="output-field">
          <span>{years}</span>
          <p> years</p>
        </div>
        <div className="output-field">
          <span> {months}</span>
          <p> months</p>
        </div>
        <div className="output-field">
          <span>{days} </span>
          <p>days</p>
        </div>
      </div>
    );
}

OutputField.propTypes = {
    age: PropTypes.shape({
      years: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      months: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      days: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
};

export default OutputField;