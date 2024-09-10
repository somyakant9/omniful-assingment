import React, { useState } from 'react';

const TaskForm = ({ onAddTask, inputRef }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAddTask({ id: Date.now(), name: taskName });
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        ref={inputRef} // Example of using ref (uncontrolled component)
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
