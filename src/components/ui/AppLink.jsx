import { Link } from "react-router-dom";
import { actions } from "../../styles/global";

export const AppLink = ({ to, children }) => {
  return (
    <Link to={to} className={actions.action}>
      {children}
    </Link>
  );
};