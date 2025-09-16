import React, { useState } from "react";

export default function List_Task() {
  //  create a useState for storing tasks
  const [tasks, setTask] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Practice coding", completed: true },
  ]);

  // create a functions for complete task or not
  const Task = ({ task }) => {
    if (task.completed) {
      return (
        <li
          style={{
            color: "green",
            textDecoration: "line-through",
          }}
        >
          {task.text}
        </li>
      );
    }
    return <li>{task.text}</li>;
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
