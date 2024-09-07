import PropTypes from 'prop-types';
import Button from './button';
import { useLocation } from 'react-router';

export const Header = (props) => {

    //     const onClick = (e) => {
    //     console.log('click action + ', e);
    // }
    const location = useLocation()

  return (
    <header>
        <h1 style={headingStyle}>Task Tracker Header</h1>
        <h1>Pops title is {props.title}</h1>
        {location.pathname === '/' && <Button onClick={props.onAdd} color={props.showAdd ? 'Red' : 'Green'} text={props.showAdd ? 'Close' : 'Add'}/>}
        {/* <Button color='green' text='Hello 2 button from header'/>
        <Button color='blue-navy' text='Hello 3 button from header'/> */}
    </header>
  )
}

// in case no props is passed and overriden the default value
Header.defaultProps = {
    title: 'Task Tracker Default Header',
}

Header.propTypes = {
  title: PropTypes.string.isRequired, //it's a way to make a validation on the coming variable data type
}

//CSS IN JS
const headingStyle = {
    color: 'red', 
    backgroundColor: 'yellow'
}


export default Header