import PropTypes from "prop-types";


const Button = ({ children, onLeaveFeedback, type, extraClass, name }) => {
    return <button
      onClick={onLeaveFeedback}
      type={type}
      name={name}
    >{children}
    </button>
  }
  
  export default Button;

  Button.propTypes = {
    children: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    type: PropTypes.string,
    extraClass: PropTypes.string,
    name: PropTypes.string.isRequired,
  }
  