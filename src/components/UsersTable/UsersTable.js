import './UsersTable.scss'
import React from 'react';

const usersTable = props => {

    return <table className="UserTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
        </thead>

        <tbody>
            {props.users.map(user => {
                console.log(user.id)
                return (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
};

export default usersTable;