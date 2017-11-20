import {ADD_TODO_ITEM, REMOVE_TODO_ITEM, SET_TODO_ITEM_COMPLETE} from './todoActions';
import addTodoItem from './addTodoItem';
import removeTodoItem from './removeTodoItem';
import setComplete from './setComplete';

const initialState = {
    todoItems: [
        {
            id: 1, title: 'Wash dishes', done: false
        },
        {
            id: 2, title: 'Vacuum the flat', done: false
        },
        {
            id: 3, title: 'Remember that you need to clean the flat', done: true
        }
    ]
};

export default function(state = initialState, action) {

    const {type, data} = action;

    switch (type) {
        case ADD_TODO_ITEM:
            return addTodoItem(state, data);
        case REMOVE_TODO_ITEM:
            return removeTodoItem(state, data);
        case SET_TODO_ITEM_COMPLETE: {
            const {id, complete} = data;
            return setComplete(state, id, complete);
        }
        default:
            return state;
    }
};
