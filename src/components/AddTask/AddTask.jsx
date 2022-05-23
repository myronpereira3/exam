import React, { useState } from "react";
import { Task } from "../Task";
import styles from "./addTask.module.css";
// import Task from "../Task/Task"

const AddTask = () => {
  const [value,setValue] = useState("");
  const [real,setReal] = useState([]);
// console.log(real)

const onDelete = (id) =>{
  setReal(real.filter(()=> real.id!=id));
}


  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" value={value} type="text" onChange={(e)=> setValue(e.target.value)} placeholder="write..."/>

      <button data-cy="add-task-button" onClick={()=> {
        setReal([...real,{id: Date.now(),value:value,isCompleted:false}]);
        setValue("");
      } }>+</button>
     
     {
       real.map((el)=>(
        <Task key={el.id} el={el.value} onDelete={onDelete}/>
       ))
     }
    </div>
  );
};

export default AddTask;