import React from 'react';

const TaskList = ({ tasks, onDeleteTask, TaskComponent }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskComponent key={task.id} task={task} onDelete={onDeleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
