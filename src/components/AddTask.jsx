import React, { useState } from "react";



const AddTask = ({ addTask }) => {

  const [text, setText] = useState("");



  const handleAdd = () => {

    if (text.trim() === "") return;

    addTask(text);

    setText("");

  };



  return (

    <div style={styles.container}>

      <input

        type="text"

        placeholder="Enter a task..."

        value={text}

        onChange={(e) => setText(e.target.value)}

        style={styles.input}

      />

      <button onClick={handleAdd} style={styles.button}>

        Add

      </button>

    </div>

  );

};



const styles = {

  container: {

    display: "flex",

    gap: "10px",

    marginBottom: "20px",

  },

  input: {

    flex: 1,

    padding: "10px",

    borderRadius: "8px",

    border: "1px solid #ccc",

  },

  button: {

    padding: "10px 20px",

    background: "#4ca3afff",

    color: "#fff",

    border: "none",

    borderRadius: "8px",

    cursor: "pointer",

  },

};



export default AddTask;