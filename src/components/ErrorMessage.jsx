import PropTypes from "prop-types";

const ErrorMessages = ({ errorObject }) => {
    return (
      <div className="error-messages">
        {Object.entries(errorObject).map(([key]) => (
          <p key={key}></p>
        ))}
      </div>
    );
  };

  ErrorMessages.propTypes = {
    errorObject: PropTypes.object.isRequired,
  };
  

  export default ErrorMessages;