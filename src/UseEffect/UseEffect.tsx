import React, {useEffect, useState} from 'react';

export const ResetEffectExample = () => {
    const[counter, setCounter] = useState(1);

    console.log('Component rendered')

    useEffect(()=>{
        console.log('Effect occurred: ' + counter)

        return () => {
            console.log('RESET')
        }

    },[counter])

    const increase = () => setCounter(counter + 1)

    return (
        <div>
            Hello, counter: {counter} <button onClick={ increase }> + </button>
        </div>
    );
};

export const KeysTrackerExample = () => {
    const[text, setText] = useState('');

    console.log('Component rendered with: ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    },[text])

    return (
        <div>
            Typed text: {text}
        </div>
    );
};


export const SetTimeoutExample = () => {
    const[text, setText] = useState('');

    console.log('Component rendered with: ' + text)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setText('3 seconds passed')
        },3000)
        return () => {
            clearInterval(timeoutId)
        }

    },[text])

    return (
        <div>
            text: {text}
        </div>
    );
};