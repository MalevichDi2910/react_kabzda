import React, {useEffect, useState} from 'react';
import {clearInterval} from "timers";

function Clock() {

    const [date, setDate] = useState<Date>(new Date())

    const stringTime = date.toLocaleString("ru", {hour: 'numeric', minute: 'numeric', second: 'numeric'})

    useEffect(() => {

        const timerId = setInterval(() =>
            setDate(new Date()), 1000)

        return () => {
            clearInterval(timerId)
        }

    })

    return (
        <div>
            <strong>{stringTime}</strong>
        </div>
    )
}

export default Clock;

