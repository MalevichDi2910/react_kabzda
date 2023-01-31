import React, {useEffect, useState} from 'react';
import {AnalogClock} from "./AnalogClock";
import {DigitalClock} from "./DigitalClock";

type propsType = {
    mode?: 'analog' | 'digital'
}

export type ClockViewPropsType = {
    date: Date
}

export const Clock: React.FC <propsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const timerId = setInterval(() =>
            setDate(new Date()), 1000)

        return () => {
            clearInterval(timerId)
        }

    })

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClock date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClock date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    )
}



