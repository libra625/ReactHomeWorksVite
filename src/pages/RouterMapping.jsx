import routeConfig from "./routeConfig.js";
import { Route, Routes } from "react-router-dom";

const RouterMapping = () => {
    const config = routeConfig();
    // console.log(config);
    return (
        <Routes>
            {config.map(({ path, component: PageComponent, id }) => {
                return (
                    <Route key={id} path={path} element={<PageComponent />} id={id} />
                );
            })}
        </Routes>
    );
};

export default RouterMapping;
