import BaseTemplate from "../../templates/BaseTemplate/index.js";
import Nav from "../../components/Nav/index.js";
import LogOutButton from "../../components/LogOutButton/index.js";
import { Typography } from "@mui/material";

const NotFoundPage = () => {
    return (
        <BaseTemplate>
            <BaseTemplate.Header>
                <Nav />
                <LogOutButton />
            </BaseTemplate.Header>

            <Typography variant="h1">404... Page not found</Typography>
        </BaseTemplate>
    );
};

export default NotFoundPage;
