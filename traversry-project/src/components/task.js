import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
export const Task = (props) => {
  return (
    <div className={`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick={() => props.onToggle(props.task.id)}>
      {/* make onClick in this way as a function to pass id to the function */}
        <h3>{props.task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => props.onDelete(props.task.id)} /></h3>
        <p>{props.task.day}</p>
        <p><Link to={`/task/${props.task.id}`}/></p>
    </div>
  )
}

export default Task;
