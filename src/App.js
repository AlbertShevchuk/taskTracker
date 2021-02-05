import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
	const [tasks, setTasks] = useState([
	{
		id:1,
		text: 'Learn JavaScrupts',
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

//delete task

const deleteTask = (id) => {
	setTasks(tasks.filter((task) => task.id !== id ))
}

  return (
    <div className='container'>
      <Header/>
	  <Tasks tasks= {tasks} onDelete={deleteTask}/>  
    </div>
  )
}

export default App
