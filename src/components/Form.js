//this component is responsible for adding the list item

import React, {useEffect} from 'react'
import{v4 as uuidv4} from "uuid";      //we also need a unique id for each task list item in the array for that we will use 'uuid'

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    
    const updateTodo = (title, id, completed) =>{
        const newTodo = todos.map((todo) =>
            todos.id === id ? {title, id, completed} : todo 
        )
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(() =>{
        if(editTodo){ 
            setInput(editTodo.title);
        } else{
            setInput("")
        }
    }, [setInput, editTodo]);
    const onInputChange = (event) =>{
        setInput(event.target.value);
    };
   const onFormSubmit = (event) =>{
    event.preventDefault();
    if(!editTodo){
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
    setInput("");
    }else{
        updateTodo(input, editTodo.id, editTodo.completed) 
    }
    
   }; 
  return (
    <form onSubmit={onFormSubmit}>
        <input 
        type="text" 
        placeholder="Enter the Task" 
        className="task-input" 
        value={input}
        required
        onChange={onInputChange}  
        />
        <button className="button-add" type="submit">
            {editTodo ? "OK" : "Add"}
        </button>
      
    </form>
  )
}

export default Form
