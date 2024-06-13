export function getTodos(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setTodos(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
