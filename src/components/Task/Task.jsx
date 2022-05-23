import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
// import task from "../data/data.json"

const Task = ({el,onDelete}) => { 
  // NOTE: do not delete `data-cy` key value pair
//  console.log(tasks);
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{el}</div>
      {<Counter/>}
      
      <button data-cy="task-remove-button" onClick={()=>onDelete(el)}>X</button>
    </li>
  );
};

export default Task;