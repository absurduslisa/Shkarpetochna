import { actions } from '../../styles/global';

const Button = ({ children, className = "", variant = "shop" }) => {
  const base = actions.action;

  const variants = {
    shop: "border-2 border-gray-600 py-2 px-4 hover:bg-orange-400/20",
    ghost: "px-2 py-1 text-sm",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;