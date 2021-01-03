import React, { useState, useEffect } from 'react';


function ToDoList() {

const URL = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
    
useEffect(() => {
  async function fetchData() {
      const response = await fetch(URL)
      const json = await response.json();
    setMytodolist(json)
  }
  fetchData();
}, []); 
    
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [mytodolist, setMytodolist] = useState([]);
    const [checkedItem, setCheckedItem] = useState({ renderTrigger: true })
    const [passedTime, setpassedTime] = useState(0);
    
    //ASK MENTOR: whithout useffect below function works as well. why should be use useEffect?

    useEffect(() => {
        setTimeout(() => {
            setpassedTime(() => passedTime + 1);
        }, 1000);
    }, [passedTime]);

    //ASK MENTOR: It seems that every one second whole of the component is running. how can I change it to 
    //not be use so much running whole the time

    const changeDescription = (e) => {
        setDescription(()=>e.target.value);
    };

    const changeDeadline = (e) => {
        setDeadline(()=>e.target.value);
    };
    
    const addToDo = () => {
        setMytodolist(() => mytodolist.concat({
            "id": parseInt(Math.floor(Math.random()*1000)),
            "description": description,
            "deadline": deadline,
            "checkStatus": false,
            "editable": false
        }));
    };

    function deleteButton(id) { 
        const newTodoList = mytodolist.filter(item => item.id !== id)
        setMytodolist(newTodoList);
    };

    //.................................checked section

    const changeCheck = (index) => {
        
        const indexNumber = mytodolist.findIndex(x => x.id === index);
        mytodolist[indexNumber].checkStatus = !mytodolist[indexNumber].checkStatus;
        
    setCheckedItem({ renderTrigger: !checkedItem.renderTrigger });
    };

    function taskStyle(checkStatus) {
    if (checkStatus) {
      return { textDecoration: "line-through" };
        };
    };

    //.............................................................edit section

    const [editItem, setEditItem] = useState({ renderTrigger: false });
        
    function editButton(index) {

        //From which index comes the request to edit
        const indexNumber = mytodolist.findIndex(item => item.id === index);
        mytodolist[indexNumber].editable = !mytodolist[indexNumber].editable;

        setEditItem({ renderTrigger: !editItem.renderTrigger })
    };
    
    //ASK MENTOR: below function works well without initilizing newdescription state.?
    const [newDescription, setNewDescription] = useState('');

    function editStyle(index) {
        
        const indexNumber = mytodolist.findIndex(item => item.id === index);

        return <div><input
            type="text"
            value={mytodolist[indexNumber].description}
            onChange={(e) => setNewDescription(mytodolist[indexNumber].description = e.target.value)
        }></input></div>
    };

    return (
        <div>
            <h1>ToDoList</h1>
            <p>You Have Used {passedTime} Seconds on this website!</p>
            ToDo description <input
                type="text"
                value={description}
                onChange={changeDescription}></input>
            <br />
            deadline <input
                type="date"
                value={deadline}
                onChange={changeDeadline}></input>
            <br />
            <button onClick={addToDo}>Add ToDo</button>
            {mytodolist.length===0 ? <div>There is No Item in the list!</div> : ''}
            <ul style={{ listStyleType: "none" }}>
                {mytodolist.map((todo, index) => 
                    <li key={index}
                        className="todolistTable"
                        style={taskStyle(todo.checkStatus)}>
                        {todo.editable ? editStyle(todo.id) : todo.description } {todo.deadline}
                        <input
                            type="checkbox"
                            onChange={() => changeCheck(todo.id)}
                            checked={todo.checkStatus} ></input>
                        <button onClick={() => deleteButton(todo.id)}>Delete</button>
                        <button onClick={() => editButton(todo.id)}>{todo.editable ? "Update" : "Edit"}</button>
                    </li>) 
                }
            </ul>
        </div>
    );
};
//ASK MENTOR: when I try to run check just first 3 elements of my list comes the warning as a blow. what that means?
//index.js:1 Warning: A component is changing an uncontrolled input to be controlled. 
//This is likely caused by the value changing from undefined to a defined value, 
//which should not happen.
//Decide between using a controlled or uncontrolled input element for the lifetime of the component.
// More info: https://reactjs.org/link/controlled-components
//     at input
//     at li
//     at ul
//     at div
//     at ToDoList (http://localhost:3000/static/js/main.chunk.js:287:58)
//     at div
//     at App 

export default ToDoList
