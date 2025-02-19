import PropTypes from 'prop-types';
export const IconSwitch = ({icon, onSwitch}) => {
    return (
        <span className="material-icons" onClick={() => onSwitch()}>
            {icon}
        </span>
    )
}
IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;