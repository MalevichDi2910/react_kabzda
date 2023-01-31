import React from 'react';
import {ClockViewPropsType} from "./Clock";
import styles from './AnalogClock.module.css'

export const AnalogClock: React.FC<ClockViewPropsType> = ({date}) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return <div className={styles.clock}>
        <h3>Clock</h3>
        <div className={styles["analog-clock"]}>
            <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
            <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
            <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
        </div>
    </div>
}