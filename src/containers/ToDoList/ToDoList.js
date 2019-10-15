import React, {
    Component
} from 'react';
import Radium from 'radium';
import './ToDoList.scss'
import Header from '../../components/Header/Header';
import ToDoListItems from '../../components/todoListItems/todoListItems'


class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: '',
            items: []
        }
    }
    onChange = event => {
        this.setState({ task: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.task !== '') {
            this.setState({
                task: '',
                items: [...this.state.items, this.state.task]
            });
        }
    }

    render() {

        return (
            <div className="ToDoList">
                <Header name="To Do List" />
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.task} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
                <ToDoListItems items={this.state.items} />
            </div>
        )
    }
}

export default Radium(ToDoList);