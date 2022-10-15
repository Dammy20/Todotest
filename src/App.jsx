import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import { ThemeContext } from './context/Themeprovider';

import './App.css'

function App() {
   const themeContext = useContext(ThemeContext)
  const changeAll = () => {
   
    const value = themeContext.darkTheme == 'light' ? 'dark' : 'light'
    themeContext.setDarkTheme(value)

  }
  let obj;
  const [todo, setTodo] = useState("")
  const [users, setUsers] = useState([])
  const [editing, setEditing] = useState(null)
  const [input, setInput] = useState("")

    const handleTodo = (e) => {
     if(todo.trim() === "") {
    return;
}
    obj = {
      Todo:todo,
    }
    users.push(obj)
    setUsers([...users])
    setTodo("")
   
  }
  
  
  
  const buttonOn = (index) => {
    users.splice(index, 1)
    console.log([...users])
    setUsers([...users])
  
  }
  const clearAll = () => {
    setUsers([])
  }
  
    const submitTodo = (e) => {
    users[e].Todo = input
    setUsers([...users])
    setEditing(null)
   }

  return (
    <main className={themeContext.darkTheme == 'light' ? "darktheme" : "lighttheme"} style={{ height: '100vh' }}>
    <div className="App">
    <div className='pt-5'>
    <div className='pt-5 text-center  '>
    <div className='d-play'>
    <h2 className={themeContext.darkTheme == 'light' ? "Todoo" : "Todo"} >TODO</h2>
    <button onClick={changeAll} className='btn-mode'><img className='icon' src="./btn.jfif" alt="" /></button>
    </div>
            
    <div className='d-flex input2'>
    <input  onChange={(e)=>setTodo(e.target.value)} value={todo} className={themeContext.darkTheme == 'light' ? "input6 shadow" : "input1 shadow"} type="text" />
    <button onClick={()=>handleTodo(todo)} className='add shadow'>ADD</button>
    </div>
            
    {users.map((value, index) =>
    <div key={index} className={themeContext.darkTheme == 'light' ? "input-dark" : "input4 shadow"}>
    {editing === index ? <input className='inputtt' onChange={(e)=> setInput(e.target.value)} name="" placeholder='Enter a new title' type="text"/> : <span class="span1" >{value.Todo}</span>}
    {editing === index ? <button className='btn-tick' onClick={() => submitTodo(index)}>✔</button>:<span className="btnn"><button onClick={() => setEditing(index)} className="btn6 shadow">✏</button></span>}
    <div className='btn1'>
    <button className='btn-delete shadow'  onClick={()=>buttonOn(index)}>❌</button>
    </div>
    </div>
   )}
            
   <div className=' div-display d-flex w-100 mt-3'>
   <span className={themeContext.darkTheme == 'light' ? "span-pend" : "span-pending"} >You have {users.length < 1 ? "no" : users.length} pending task{users.length <= 1 ? "" : "s"}  </span>
   <button className='btn-t btn-sm' onClick={clearAll}>Clear All</button></div>
   </div>
   </div>
   </div>
   </main>
  )
}

export default App
