export default function(state, id, status) {

    const newTodoItems = state.todoItems.map(item => {
        if (item.id === id) {
            return {...item, done: status}
        }
        else {
            return item;
        }
    });

    return {
        ...state,
        todoItems: newTodoItems
    };
}
