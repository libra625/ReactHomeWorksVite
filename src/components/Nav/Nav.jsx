import { useEffect, useState } from "react";
import { getTodos } from "../utilities/TodosGetSet/index.js";
import { Link } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/index.js";

const DATA_KEY = "ToDoListReactAndRoutes";

const Nav = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = () => {
            setTodos(getTodos(DATA_KEY));
            console.log(1);
        };

        const intervalId = setInterval(() => {
            fetchTodos();
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <nav className="d-flex gap-4 p-3 shadow-lg">
                <Link className="nav-links" to={"/"}>
          Home Page
                </Link>
        ||
                {todos.map((todo, index) => (
                    <Link className="nav-link" key={index} to={`/todos/${index}`}>
            Task : {todo.title}
                    </Link>
                ))}
                <Link className="nav-links" to="*" element={NotFoundPage} />
            </nav>
        </>
    );
};

export default Nav;
