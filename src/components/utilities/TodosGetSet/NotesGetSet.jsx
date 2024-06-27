import { DATA_KEY } from "./key.js";

export function getTodos() {
    return JSON.parse(localStorage.getItem(DATA_KEY));
}

export function setTodos(value) {
    localStorage.setItem(DATA_KEY, JSON.stringify(value));
}

export function clearLocalStorage() {
    return localStorage.clear();
}
