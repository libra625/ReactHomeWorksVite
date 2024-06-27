import ToDoList from "../../components/ToDoList/index.js";
import BaseTemplate from "../../templates/BaseTemplate";

const HomePage = () => {
    return (
        <BaseTemplate>
            <ToDoList />
        </BaseTemplate>
    );
};

export default HomePage;
