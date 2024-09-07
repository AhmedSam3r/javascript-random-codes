//we don't want tasks to be seperate from our component, we want it to be part of our state
// const tasks = [
//     {
//         id: 1,
//         text: 'doctors appointment',
//         day: 'Feb 5',
//         reminder: true 
//     },
//     {
//         id: 2,
//         text: 'interview meeting',
//         day: 'Feb 10',
//         reminder: true 
//     },
//     {
//         id: 3,
//         text: 'changing eyeglasses',
//         day: 'May 15',
//         reminder: true 
//     },
// ];
import Task  from "./task";
export const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <div>
        {tasks.map((task) => (
        // <h3 key={task.id}>{task.text}</h3>
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))}
        
    </div>
  )
}

export default Tasks;
