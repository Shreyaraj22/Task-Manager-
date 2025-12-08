import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {

  return (

    <div>

      {tasks.length === 0 ? (

        <p style={{ textAlign: "center" }}>No tasks added yet.</p>

      ) : (

        tasks.map((task) => (

          <TaskItem

            key={task.id}

            task={task}

            toggleComplete={toggleComplete}

            deleteTask={deleteTask}

          />

        ))

      )}

    </div>

  );

};



export default TaskList;