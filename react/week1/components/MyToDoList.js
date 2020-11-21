import React from 'react'
import ToDoList from '../data/ToDoList'
import { Header } from './Header'

function Description(props) {
    
    return (
        <div>
            <h3> Description:</h3><p>{props.description}</p>
        </div>
    )
};

function Title(props) {
    return <h2>Title: {props.name}</h2>
};

function Date(props) {
    
      return (
        <div>
                  <h3> When it should be done:</h3><p>{props.date}</p>
                  <h3>Deadline: {props.deadline}</h3>
        </div>  
      )
};

export function ToDoListTable() {
  
  const info = ToDoList.map(myact => {
     
    return (
      //'To Do List' Header is defined in the index.js 
      <div>
        <ul>
          <li>
            <Title name={myact.act} />
            <Description description={myact.description} />
            <Date date={myact.dateOfTheAct} deadline={myact.deadline} />
          </li>
        </ul>
      </div>
    )
  });
  return (
    <div>
    <Header />
    <ul> {info}</ul>  
    </div>
  );
}

