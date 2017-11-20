import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import {connect} from 'react-redux';
import {createNewTodoItem, setTodoItemComplete} from '../../reducers/todoActions';
import './Styles.css';
import CreateNewTodoItem from '../CreateNewTodoItem/index';

class TodoList extends React.Component {

    render() {
        return (
            <ul className="todo-list">
                {
                    this.props.todoItems.map(item => (
                        <li key={item.id}>
                            <TodoItem title={item.title} done={item.done}
                                      onDoneChanged={done => this.props.onTodoItemDoneChange(
                                          item.id, done
                                      )}/>
                        </li>
                    ))
                }
                <li key="create-new">
                    <CreateNewTodoItem
                        onCreateNewItem={title => this.props.onCreateNewTodoItem(title)}
                    />
                </li>
            </ul>
        );
    }

    // noinspection JSUnusedGlobalSymbols
    static propTypes = {
        todoItems: PropTypes.arrayOf(PropTypes.object),
        onTodoItemDoneChange: PropTypes.func,
        onCreateNewTodoItem: PropTypes.func
    };

    // noinspection JSUnusedGlobalSymbols
    static defaultProps = {
        todoItems: [],
        onTodoItemDoneChange: a => a,
        onCreateNewTodoItem: a => a
    };
}

function mapStateToProps(state) {
    return {todoItems: state.todoItems};
}

function mapDispatchToProps(dispatch) {
    return {
        onTodoItemDoneChange: (id, complete) => dispatch(setTodoItemComplete(id, complete)),
        onCreateNewTodoItem: (title) => (dispatch(createNewTodoItem(title)))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
