import React from "react";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="flex justify-between items-center p-3 mb-2 bg-gray-100 rounded-lg">
      <span
        className={`text-base ${
          task.completed ? "line-through text-gray-400" : "text-black"
        }`}
      >
        {task.text}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(task.id)}
          className="bg-green-400 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-green-500 transition"
          aria-label="Complete Task"
        >
          ✓
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-600 text-white px-2.5 py-1 rounded-md cursor-pointer hover:bg-red-700 transition"
          aria-label="Delete Task"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
