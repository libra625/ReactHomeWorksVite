import HomePage from "../pages/HomePage/index.js";
import SingleTodo from "../pages/SingleTodo/index.js";
import NotFoundPage from "../pages/NotFoundPage/index.js";
import routeNames from "./routeNames.js";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";

const routeConfig = () => {
    const pageComponents = [HomePage, SingleTodo, LoginPage, NotFoundPage];
    const keys = Object.keys(routeNames);

    const routeConfig = pageComponents.map((pageComponent, index) => {
        const key = keys[index];
        // console.log("key", key);
        // console.log("routeNames", routeNames);
        // console.log("keys", keys);

        return {
            path: routeNames[key],
            component: pageComponent,
            id: index,
        };
    });

    return routeConfig;
};

export default routeConfig;
