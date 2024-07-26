import ToDoList from "../../components/ToDoList/index.js";
import BaseTemplate from "../../templates/BaseTemplate";
import Nav from "../../components/Nav/index.js";
import LogOutButton from "../../components/LogOutButton/index.js";

const HomePage = () => {
    return (
        <BaseTemplate>
            <BaseTemplate.Header>
                <Nav />
                <LogOutButton />
            </BaseTemplate.Header>

            <ToDoList />
        </BaseTemplate>
    );
};

export default HomePage;
