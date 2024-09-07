import React, {useReducer, useState} from "react";

const reducer = (state, action) => {

}
export const ReducerTutorial = () => {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);

    const [state, dispatch] = useReducer(reducer, 
        {count:0, showText: true} )

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1);
                setShowText(!showText);
            }}> Click here</button>
            

            {showText && <p>this is a text</p>}
        </div>

    );
}