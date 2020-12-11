import React, { useState } from 'react';

const initialToDoList = [
  {
    id: 0,
    description: "Get out of bed",
    checkStatus: false
  },
  {
    id: 1,
    description: "Brush teeth",
    checkStatus: false
  },
  {
    id: 2,
    description: "Eat breakfast",
    checkStatus: false
  },
];


function ToDoList() {
    
    const [mytodolist, setMytodolist] = useState(initialToDoList);
    const [checkedItem, setCheckedItem] = useState({ renderTrigger: true })
    const [passedTime, setpassedTime] = useState(0);
    
    
    setTimeout(() => {
        setpassedTime(()=>passedTime + 1);
    }, 1000);
    
    const changeCheck = (index) => {
        
        const indexNumber = mytodolist.findIndex(x => x.id === index);
        mytodolist[indexNumber].checkStatus = !mytodolist[indexNumber].checkStatus;
        
    setCheckedItem({ renderTrigger: !checkedItem.renderTrigger });
        
    };

    const addToDo = () => {
        setMytodolist(() => mytodolist.concat({
            "id": parseInt(Math.floor(Math.random()*1000)),
            "description": "Random Text",
            "checkStatus": false
        }));
    };

    function deleteButton(id) { 
        const newTodoList = mytodolist.filter(item => item.id !== id)
        setMytodolist(newTodoList);
    };

    function taskStyle(checkStatus) {

    if (checkStatus) {
      return { textDecoration: "line-through" };
        };
    };
    
    return (
        <div>
            <h1>ToDoList</h1>
            <p>You Have Used {passedTime} Seconds on this website!</p>
            
            <button onClick={addToDo}>Add ToDo</button>
            {mytodolist.length===0 ? <div>There is No Item in the list!</div> : ''}
            <ul style={{ listStyleType: "none" }}>
                {mytodolist.map((todo, index) => 
                    <li key={index}
                        className="todolistTable"
                        style={taskStyle(todo.checkStatus)}>
                        {todo.description} {todo.deadline}
                        <input
                            type="checkbox"
                            onChange={() => changeCheck(todo.id)}
                            checked={todo.checkStatus} ></input>
                        <button onClick={() => deleteButton(todo.id)}>Delete</button>
                    </li>) 
                }
            </ul>
        </div>
    );
};

export default ToDoList
