import * as React from 'react';
import PropTypes from 'prop-types';

function CreateNewTodoItem(props) {
    return (
        <form onSubmit={(event) => {
            props.onCreateNewItem(event.target.values);
            console.log(event, event.target.values);
            event.preventDefault();
        }}>
            <input type="text" placeholder="Enter ToDo title here"/>
            <button type="submit">Create New</button>
        </form>
    )
}

CreateNewTodoItem.propTypes = {
    onCreateNewItem: PropTypes.func
};

CreateNewTodoItem.defaultProps = {
    onCreateNewItem: a => a
};

export default CreateNewTodoItem;
