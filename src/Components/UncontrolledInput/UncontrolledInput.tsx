import React, {ChangeEvent, useRef, useState} from "react";

// export type PropsType = {
//     title: string
// }

export const UncontrolledInput = () => <input/>;

// export const TrackValueUncontrolledInput = () => {
//     const[value, setValue] = useState('');
//
//     return <><input onChange={(event) => {
//         const actualValue = event.currentTarget.value;
//         setValue(actualValue);
//     } } />  -  {value} </>;
// }

export const GetValueTrackValueUncontrolledInputByButton = () => {
    const[value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);

    }

    return <><input ref={inputRef} /><button onClick={save}> save </button> actual value: {value}</>
}

export const ControlledInput = () => {

    const[parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler} />
}

export const ControlledCheckbox = () => {

    const[parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const[parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option>None</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}
