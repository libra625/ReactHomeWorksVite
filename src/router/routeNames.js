const routeNames = {
    homePage: "/",
    notFoundPage: "*",
    loginPage: "/login",
    singleTodo: "todos/:todoId",
    todoList: "todos",
    viewTodoPage: "viewTodoPage/:todoId",
};

Object.freeze(routeNames);
export default routeNames;
