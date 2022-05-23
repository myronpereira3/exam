import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader/>
      <AddTask/>
      <Task/>
    </div>
  );
};

export default TaskApp;
