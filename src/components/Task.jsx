import React, { useEffect } from 'react';

const Task = ({ task, onDelete }) => {
  useEffect(() => {
    console.log(`Task ${task.id} mounted`);

    return () => {
      console.log(`Task ${task.id} unmounted`);
    };
  }, [task]);

  return (
    <li>
      {task.name}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
