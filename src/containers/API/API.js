import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import './API.scss'
import UsersTable from '../../components/UsersTable/UsersTable'
import Axios from 'axios';

class API extends Component{
    constructor(props){
        super(props);
        this.state = {
            usersList: []
        }
    }

    getDataFromAPI = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then( users => {
            this.setState({usersList: [...users.data, ...this.state.usersList]})
        })
        .catch(err => {
            throw new Error(err)
        })
    }

    postDataToAPI = () => {
        Axios.post('https://jsonplaceholder.typicode.com/posts?userId=1', {
            name: 'Anton',
            username: 'Stepanov',
            email: 'email@stepana.kop'
        })
        .then( async (res) => {
            res.data.id = Math.floor(Math.random() * 1054e5);
            this.setState({usersList: [...this.state.usersList, res.data]})
        })
        .catch(err => {
            throw new Error(err)
        })
    }

    render(){
        return (
            <div className="API">
                <Header name="API" />
                <button onClick={this.getDataFromAPI}>Get Request</button>
                <button onClick={this.postDataToAPI}>Post Request</button>
                <UsersTable users={this.state.usersList}></UsersTable>
            </div>
        )
    }
}

export default API;