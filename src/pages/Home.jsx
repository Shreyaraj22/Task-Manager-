import React, { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";



const Home = () => {

  const [tasks, setTasks] = useState([]);


  useEffect(() => {

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    setTasks(savedTasks);

  }, []);

 useEffect(() => {

    localStorage.setItem("tasks", JSON.stringify(tasks));

  }, [tasks]);



  const addTask = (text) => {

    const newTask = {

      id: Date.now(),

      text,

      completed: false,

    };

    setTasks([...tasks, newTask]);

  };



  const toggleComplete = (id) => {

    setTasks(

      tasks.map((task) =>

        task.id === id ? { ...task, completed: !task.completed } : task

      )

    );

  };



  const deleteTask = (id) => {

    setTasks(tasks.filter((task) => task.id !== id));

  };



  return (

    <div style={styles.container}>

      <h1 style={styles.title}>Task Manager</h1>



      <AddTask addTask={addTask} />



      <TaskList

        tasks={tasks}

        toggleComplete={toggleComplete}

        deleteTask={deleteTask}

      />

    </div>

  );

};



const styles = {

  container: {

    maxWidth: "450px",

    margin: "40px auto",

    padding: "20px",

    background: "#bc99e9ff",

    borderRadius: "10px"

  

  },

  title: {

    textAlign: "center",

    marginBottom: "20px",

  },

};



export default Home;