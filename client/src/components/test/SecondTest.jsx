import React from 'react'

import fetch from '../../effects/use-fetch.effect'

const SecondTest = ({ userId }) => {

    const todos = fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    ); 
    
    console.log(todos);

    return (
        <div className="card">
            {
                todos && todos ? (
                    <h2>{todos.title}</h2>

                ) : (
                    <p>No data Found</p>
                )
            }
            {/* {
                user && user ? (
                    <div>
                        <h3> { user.username }</h3>
                        <p> { user.name }</p>
                    </div>
                ) : (
                    <p>User not Found</p>
                )
            } */}
        </div>
    )
}

export default SecondTest
// https://jsonplaceholder.typicode.com/users?id=${userId}