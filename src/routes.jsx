import { AuthPage } from "./pages/AuthPage";
import { Navigate } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";

export const routes = [
    { path: "/auth" , element: <AuthPage/>},
    { path: "/", element: <Navigate to="/auth" />},
    { path: "/dashboard", element: <DashboardPage/>}
]