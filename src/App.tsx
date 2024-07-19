import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './styles/App.scss'
import Todos from './components/Todos'
import {Todo} from './types';


const App: React.FC = () => {
  const [todo,setTodo] = useState<Todo>({
    title: "",
    text: '',
    id:'',
    isActive: false,
    isComplete: false
  });

  const [todoList, setTodoList] = useState<Todo[]>([])
  const [todoActive, setTodoActive] = useState(false);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target
    setTodo({
      ...todo,
      [name]: value
    })
  }
  const addTodo = (e:  React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(todo.title === "" || todo.text === "" ) {
      console.log(`nothing to add`)
      return
    }
    setTodoList(prev => [{...todo, id:uuidv4()},...prev])
    setTodo({title:"", text:"", id:"", isActive:false, isComplete:false})
  }
  const deleteTodo = (id: string) => {
      setTodoList(prev => prev.filter(item => item.id !== id))
  }
  const editTodo = (id :string) => {
    if(todo.title === "" || todo.text === "") return
   setTodoList(prevItem => 
    prevItem.map(item => item.id === id ? {...item, title:todo.title, text:todo.text, isActive: false} : { ...item } )
   )
  }
  const toggleTodoActive = (id: string) => {
  
    setTodoList(prevTodos =>
        prevTodos.map(item =>
            item.id === id ? { ...item, isActive:!item.isActive } : { ...item, isActive: false }
        )
    )
  }
  const handleComplete = (id:string) => {
    
    setTodoList(prevList => 

      prevList.map(item => item.id === id ? {...item, isComplete:!item.isComplete} : { ...item, isComplete: false })
    )
  }
  return (
    <div className='todoContainer'>
      <form>
        <label htmlFor='title'>Todo Title</label>
        <input
          type='text'
          name='title'
          value={todo.title}
          required
          placeholder='enter your todo title'
          onChange={e => handleOnChange(e)}
        />
        <label htmlFor='content'>Todo Content</label>
        <input
          type='text'
          name='text'
          required
          placeholder='enter your todo content'

          value={todo.text}
          onChange={e => handleOnChange(e)}
        />
        <button onClick={e => addTodo(e)}>add todo</button>
        
      </form>
      <Todos todos={todoList} deleteTodo={deleteTodo} active={{todoActive, setTodoActive}} toggleTodoActive={toggleTodoActive} editTodo={editTodo} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
