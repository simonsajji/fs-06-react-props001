import './App.css';
import PropTypes from 'prop-types';

const Card = ({ color }) => {
  return (
    <div className="color-card">
      <div className="color-box" style={{ backgroundColor: color.hex }}></div>
      <p className="color-name">{color.hex}</p>
      <div style={{ color: color.hex ,fontWeight:700,fontSize:11}}>{color?.rgb}</div>
    </div>
  );
};

Card.propTypes = {
  color: PropTypes.object.isRequired,
};

export default Card;
