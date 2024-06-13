import HomePage from "./HomePage/index.js";
import SingleTodo from "./SingleTodo/index.js";
import NotFoundPage from "./NotFoundPage/index.js";
import routeNames from "./routeNames.js";

const routeConfig = () => {
    const pageComponents = [HomePage, SingleTodo, NotFoundPage];
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
