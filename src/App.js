import React, { Suspense, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from './store/actions';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
const Task = React.lazy(() => import('./components/Task')); // Code splitting with React.lazy

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const inputRef = useRef();

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} inputRef={inputRef} />
      <Suspense fallback={<div>Loading tasks...</div>}>
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} TaskComponent={Task} />
      </Suspense>
    </div>
  );
};

export default App;
