import { actions, borders, buttons } from '../../styles/global';

const Button = ({ children, className = "", onClick, ariaLabel }) => {

  return (
    <button aria-label={ariaLabel} onClick={onClick} className={`${borders.border_button} ${buttons.general} ${actions.focus} ${className}`}>{children}</button>
  );
};

export default Button;