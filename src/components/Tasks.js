import { useState } from 'react'

//Each child in a list (created by map) should have a unique "key" prop
//The parent (h3 tag) should have a unique value
const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Do the thing',
            day: 'June 1st at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Dont forget the other thing',
            day: 'June 2nd at 3:30pm',          
            reminder: true
        },
        {
            id: 3,
            text: 'Do the last thing',
            day: 'June 17th at 2:30pm',
            reminder: true
        }
    ])

    return (
        <div>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </div>
    )
}

export default Tasks
