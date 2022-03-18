import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    if(typeof window !== "undefined"){
        const token = localStorage.getItem("token");

        if(token) return children;
        else return <Navigate to="/signin"/>;
    }
}

export default Protected;