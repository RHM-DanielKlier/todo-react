export const SET_TODO_ITEM_COMPLETE = 'SET_TODO_ITEM_COMPLETE';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';

export function setTodoItemComplete(id, complete) {
    return {type: SET_TODO_ITEM_COMPLETE, data: {id, complete}};
}

export function createNewTodoItem(title) {
    return {type: ADD_TODO_ITEM, data: {title}};
}
