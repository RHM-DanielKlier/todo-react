import * as React from 'react';
import PropTypes from 'prop-types';
import './Styles.css';

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.done}
                   onChange={() => props.onDoneChanged(!props.done)}/>
            <span>{props.title}</span>
        </div>
    );
}

TodoItem.propTypes = {
    done: PropTypes.bool,
    title: PropTypes.string,
    onDoneChanged: PropTypes.func
};

// noinspection JSUnusedGlobalSymbols
TodoItem.defaultProps = {
    done: false,
    title: '',
    onDoneChanged: a => a
};

export default TodoItem;
