import React from 'react'
import Users from '../data/UserList' 
    
const UserAttributes = (props) => {
    
    return (
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

export function UserAtt() {
  
const info=Users.map(x=>{
  
    return (
      <UserAttributes
        fullname={x.fullname} 
        adress={x.adress} 
        age={x.age}
        height={x.height}
        languages={x.languages.map(y=><div>{y}</div>)}
      />
  );
})
  return <ul>{info}</ul>;
}


