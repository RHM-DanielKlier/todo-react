export default function(state, data) {

    const newTodoItem = {
        ...data,
        id: state.todoItems.length + 1,
        done: false
    };

    return {
        ...state,
        todoItems: state.todoItems.concat(newTodoItem)
    };
};
