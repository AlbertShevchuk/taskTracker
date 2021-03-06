import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
	
	const [showAddTask, setShowAddTask] = useState(false)
	const [tasks, setTasks] = useState([
	{
		id:1,
		text: 'Learn JavaScript',
		day: 'Feb 1st at 2:30pm',
		reminder: true,
	},
	{
		id:2,
		text: 'Learn React',
		day: 'Feb 4th at 11:50pm',
		reminder: true,
	},
	{
		id:3,
		text: 'Learn Golang',
		day: 'Feb 7th at 7am',
		reminder: false,
	}
])

//addTask needs to be changed after learning golang
const addTask = (task) => {
	const id = Math.floor(Math.random() * 10000) + 2
	const newTask = {id, ...task}
	setTasks([...tasks, newTask])
}



//delete task

const deleteTask = (id) => {
	setTasks(tasks.filter((task) => task.id !== id ))
}

//toggle reminder

const toggleReminder = (id) => {
	setTasks(
	tasks.map((task) => 
	task.id === id ? { ...task, reminder: !task.reminder} : task))
}

  return (//short ternary operator wo/ else statement example
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
	  {showAddTask && <AddTask onAdd={addTask}/>}		
	  {tasks.length > 0 ? (<Tasks tasks= {tasks} 
	  onDelete={deleteTask} onToggle={toggleReminder}/> 
	  ) : ('No Tasks To Show')} 
    </div>
  )
}

export default App
