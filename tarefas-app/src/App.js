import './App.css';
import {BsTrash, BsBookmarkCheck, BsBookmarkFill} from 'react-icons/bs'
import { useState, useEffect } from 'react';
function App() {
  const API = 'http//localhost:5000';
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  

  useEffect(()=>{
    const loadData = async()=>{
      setLoading(true)

      const res = await fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data)=> data)
      .catch((err) => console.log(err))
      setTodos(res)
      setLoading(false)
    }
    loadData()
  },[])

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log("enviou")
    console.log(title)

    
    const todo = {
    id:Math.random(),
    title,
    time,
    done: false
  };

  fetch("http://localhost:5000/todos",{
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  })

  setTodos((prevState) => [...prevState, todo])

  setTitle("")
  setTime("")
  }

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}` ,{
      method: "DELETE",
    })

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
  }

  const handleEdite = async(todo) => {
    todo.done = !todo.done

    const data = await fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    })

    setTodos((prevState)=> prevState.map((t) => (t.id === data.id? (t=data): t)))


  }


  if (loading) {
    return <p>Carregando...</p>
  }



  return (
    
    <div className="App">
      <div className='todo-header'>
        <h1>ToDo</h1>
      </div>
      <div className='form-todo'>
        <p>Insira sua proxima tarefa</p>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='title'>O que você vai fazer?</label>
            <input type='text' name='title' placeholder='Titulo da tarefa' onChange={(e) => setTitle(e.target.value)} value={title || ""} required/>
          </div>
          <div className='form-control'>
            <label htmlFor='time'>Duração</label>
            <input type='text' name='time' placeholder='Tempo estima (em horas)' onChange={(e) => setTime(e.target.value)} value={time || ""} required/>
          </div>
          <input value='Criar Tarefa' type='submit'/>
        </form>
      </div>
      <div className='list-todo'>
        <h2>Lista de tarefas</h2>
        <div>
          {todos == 0 && <p>Não há tarefas</p>}
          {todos.map((todo)=> (
            <div className="todo" key={todo.id}>
              <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
              <p>Duração: {todo.time}</p>
              <div className="actions">
                <span onClick={() => {handleEdite(todo)}}>
                  {!todo.done ? <BsBookmarkCheck/> : <BsBookmarkFill/>}
                </span>
                <BsTrash onClick={() => handleDelete(todo.id)}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
