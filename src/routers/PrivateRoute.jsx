import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return <div>{user.logged ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
