const tasks = [
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
	
]

const Tasks = () => {
	return(
		<>
			{tasks.map((task) => (
				<h3>{task.text}</h3>
			))}
		</>
	)
}

export default Tasks