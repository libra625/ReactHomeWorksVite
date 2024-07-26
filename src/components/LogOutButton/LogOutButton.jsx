import { useNavigate } from "react-router-dom";
import routeNames from "../../router/routeNames.js";
import BaseTemplate from "../../templates/BaseTemplate/index.js";
import Cookies from "js-cookie";
import { Button } from "@mui/material";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

const LogOutButton = () => {
    const redirect = useNavigate();
    const { loginPage: loginPage } = routeNames;

    const handleLogout = () => {
        Cookies.remove("loggedin");
        redirect(loginPage);
    };

    return (
        <BaseTemplate.Header>
            <Button
                color={"error"}
                variant={"contained"}
                onClick={handleLogout}
                startIcon={<LogoutSharpIcon />}
            >
        Log Out
            </Button>
        </BaseTemplate.Header>
    );
};

export default LogOutButton;
