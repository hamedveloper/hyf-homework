import React from 'react'
    
const UserAttributes = (props) => {
    return(
    <li>
        <h2>
            <div>Full Name: {props.fullname}</div>
            <div>Address: {props.adress}</div>
            <div>Age: {props.age}</div>
            <div>Height: {props.height}</div>
            <div>Languages: {props.languages}</div>
        </h2>
    </li>
    )
}

export default UserAttributes
