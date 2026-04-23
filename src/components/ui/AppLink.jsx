import { Link } from "react-router-dom";
import { actions } from "../../styles/global";

// For single text
export const AppLink = ({ img=null, className="", to, children }) => {
  return (
    <Link to={to} className={`${actions.focus} ${actions.hover} ${className}`}>
      {children}
      {img && <img className="w-10 place-self-center" src={img} alt="icon" />}
    </Link>
  );
};