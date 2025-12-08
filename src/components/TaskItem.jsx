import React from "react";


const TaskItem = ({ task, toggleComplete, deleteTask }) => {

  return (

    <div style={styles.item}>

      <span

        style={{

          ...styles.text,

          textDecoration: task.completed ? "line-through" : "none",

          color: task.completed ? "gray" : "#000",

        }}

      >

        {task.text}

      </span>



      <div style={styles.actions}>

        <button onClick={() => toggleComplete(task.id)} style={styles.completeBtn}>

          ✓

        </button>



        <button onClick={() => deleteTask(task.id)} style={styles.deleteBtn}>

          ✕

        </button>

      </div>

    </div>

  );

};



const styles = {

  item: {

    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",

    padding: "12px",

    marginBottom: "10px",

    background: "#f7f7f7",

    borderRadius: "8px",

  },

  text: {

    fontSize: "16px",

  },

  actions: {

    display: "flex",

    gap: "10px",

  },

  completeBtn: {

    background: "#71cc1cff",

    color: "#fff",

    padding: "6px 10px",

    border: "none",

    borderRadius: "6px",

    cursor: "pointer",

  },

  deleteBtn: {

    background: "red",

    color: "#fff",

    padding: "6px 10px",

    border: "none",

    borderRadius: "6px",

    cursor: "pointer",

  },

};



export default TaskItem;