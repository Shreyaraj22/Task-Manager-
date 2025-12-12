import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <div className="flex gap-2 mb-5">
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow p-2 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"

      />
      <button
        onClick={handleAdd}
        className="px-5 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition cursor-pointer"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
