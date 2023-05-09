import React, {useEffect, useState} from 'react'
import classes from "./Clock.module.css";

/*type PropsType = {

}

const get2digitsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(()=> {

        const interValID = setInterval(()=>{
           console.log('tick')
            setDate(new Date())
        },1000);

        return ()=>{
            clearInterval(interValID)
        }
    },[])

    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    )
}*/

const get2digitsString = (num: number) => num < 10 ? "0" + num : num

export const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`,
    };

    const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`,
    };

    const hoursStyle = {
        transform: `rotate(${hours * 30 + minutes / 2}deg)`,
    };

    return (
        <div className={classes.clock}>
            <div className={`${classes.hand} ${classes.hourHand}`} style={hoursStyle} />
            <div className={`${classes.hand} ${classes.minuteHand}`} style={minutesStyle} />
            <div className={`${classes.hand} ${classes.secondHand}`} style={secondsStyle} />
        </div>
    );
};