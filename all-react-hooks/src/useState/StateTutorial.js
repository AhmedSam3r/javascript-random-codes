import React, {useState} from 'react';

export const StateTutorial = () => {
    // let counter = 0;
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("empty");
    //you can't alter the state of a variable unless you used the declared function related to useState
    // const incrementCounter = () => {console.log('hello'); counter++;}
    const incrementCounter = () => {setCounter(counter+1)}
    const onChange = (event) => {
        setInputValue(event.target.value) 
    }
    return <div>
        <button>Increment {counter}</button>
        {/* /* the counter variable doesn't get updated and displayed with different value on the console, why ?
                As the webpage should be re-rendered which doesn't happen*/ }
        {/* <button onClick={incrementCounter}>IcrementFunction {counter}</button> */}
        <button onClick={incrementCounter}>IcrementFunction {counter}</button><br></br><br></br>
        <input placeholder='enter something ...' onChange={onChange}/>{inputValue} 
                
    </div>
};
