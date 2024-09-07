// import React from 'react';
import PropTypes from 'prop-types';


//as long as you name the parameters the same names as the properties, their order won't be affected
// const Button = ({color, text}) => { 
//     return (
//         <div>
//             <button style={{backgroundColor: color}}className='btn'>Add {text}</button>

//         </div>
//     );
// }
//another way by taking object props as a parameter and accessing elements inside it
const Button = (props) => { 
    // const onClick = (e) => {
    //     console.log('click action + ', e);
    // }
    
    return (
        <div>
            <button onClick={props.onClick} style={{backgroundColor: props.color}} className='btn'>Add {props.text}</button>

        </div>
    );
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'default'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    
}

export default Button