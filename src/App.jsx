import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { v4 as uuidv4 } from 'uuid'
import { MdModeEditOutline } from "react-icons/md";

import './App.css'
import Navbar from './components/Navbar'
import TaskSubmitBar from './components/TaskSubmitBar'
import Task from './components/Task'


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(() => {
    const todosString = localStorage.getItem("todos");
    return todosString ? JSON.parse(todosString) : [];
  })

  // Load from localStorage on first render
  useEffect(() => {
    const todosString = localStorage.getItem("todos")
    if (todosString) {
      setTodos(JSON.parse(todosString))
    }
    console.log(todos)
  }, [])

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log(localStorage.getItem("todos"));
  }, [todos])

  const [showFinished, setShowFinished] = useState(false)


  const saveToLocal = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const toggleFinished = (params) => {
    setShowFinished(!showFinished);
  }


  const handleEdit = (e, id) => {
    let t = todos.filter(item => {
      return item.id === id;
    })
    console.log(t[0])
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos);
  }

  const handleDelete = (e, id) => {
    // create a new copy of todos
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id == id;
    })
    // create a new copy of todos
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }


  return (
    <>
      <Navbar />

      <TaskSubmitBar
        todo={todo}
        onChange={handleChange}
        onAdd={handleAdd}
        showFinished={showFinished}
        toggleFinished={toggleFinished}
      />


      <div className="container bg-purple-100 rounded-xl mx-auto my-5 p-5 min-h-[60vh] w-[90%]">
        <h1 className='text-black text-2xl hover:font-bold transition-all'>Your Tasks</h1>
        {todos.length === 0 && <div className='text-5xl hover:font-bold transition-all'> No tasks added </div>}
        {todos.map(item => {
          return (showFinished || !item.isCompleted) && <Task
            key={item.id}
            id={item.id}
            tasktext={item.todo}
            isCompleted={item.isCompleted}
            onEdit={handleEdit}
            onDelete={handleDelete}
            handleCheckbox={handleCheckbox}
          />
        })}
      </div>
    </>
  )
}

export default App
