import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ element }) => {
    const user = localStorage.getItem('token');
    return user ? element : <Navigate to="/auth" />;
};
