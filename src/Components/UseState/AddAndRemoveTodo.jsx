import React, { useState } from 'react'
//Implement a Todo List app that allows adding and removing items using useState
export default function AddAndRemoveTodo() {
    // create two useState one for task and other for todo
    const [task, setTask] = useState(" ");
    const [todo, setTodo] = useState([]);

    //create a funcrtions for adding the todos
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (task.trim() === "") return; // prevent empty todos

        setTodo((prevTodos) => [...prevTodos, task]); // add task
        setTask(""); // clear input after adding
    }

    // create a functions for Removing the todos
    const handleRemoveTodo = (index) => {
        setTodo((prevTodo) => prevTodo.filter((_, item) => item !== index)); // in the filter() we are not care about the value of storing All elements in the array,
        // we are just focus on the index of the storing all the elements in the array.
    }
    return (
        <>
            <h1>Todo List:</h1>
            {/* Create a input filed in the form */}
            <form onSubmit={handleAddTodo}>
                <input type="text" placeholder='Enter Your Task'
                    name='todo'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type='submit'>AddTodo</button>
            </form>
            {/* TodoList display */}
            <h1>Todo List Display:</h1>
            <ul>
                {/* All todo are Display in the List */}
                {todo.map((todos, index) => (
                    <li key={index}>{todos} {" "}
                        <button onClick={() => handleRemoveTodo(index)}>RemoveTodo</button>

                    </li>
                ))}
            </ul>
        </>
    )
}
