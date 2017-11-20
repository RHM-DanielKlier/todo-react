export default function(state, id) {
    return {
        ...state,
        todoItems: state.todoItems.filter(item => item.id !== id)
    };
}
