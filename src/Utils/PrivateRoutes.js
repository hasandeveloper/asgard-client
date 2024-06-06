import { Outlet, Navigate } from "react-router-dom";
import { authToken } from "../Context/AuthenticationContext";
const PrivateRoutes = () => {
    const token = authToken()
    return (
        token !== null ? <Outlet/> : <Navigate to="/sign_in"/>
    )
}

export default PrivateRoutes