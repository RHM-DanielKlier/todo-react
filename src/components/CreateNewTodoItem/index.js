import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Styles.css';

class CreateNewTodoItem extends Component {

    constructor() {
        super();

        this.state = {
            title: ''
        };
    }

    render() {
        return (
            <form className="create-new-todo" onSubmit={(event) => {
                this.props.onCreateNewItem(this.state.title);
                event.preventDefault();
            }}>
                <input type="text" placeholder="Enter ToDo title here" value={this.state.title}
                       onChange={e => this.setState({title: e.target.value})}
                />
                <button type="submit">Create New</button>
            </form>
        );
    }

    // noinspection JSUnusedGlobalSymbols
    static propTypes = {
        onCreateNewItem: PropTypes.func
    };

    // noinspection JSUnusedGlobalSymbols
    static defaultProps = {
        onCreateNewItem: a => a
    };
}

export default CreateNewTodoItem;
