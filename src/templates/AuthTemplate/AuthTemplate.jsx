import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const AuthTemplate = ({ children }) => {
    const redirect = useNavigate();

    useEffect(() => {
        if (!Cookies.get("loggedin")) {
            redirect("/login");
        } else if (window.location.pathname === "/login" && Cookies.get("loggedin"))
            redirect("/");
    }, []);

    return children;
};

export default AuthTemplate;
