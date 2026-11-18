import { useEffect, useRef } from "react"
import styles from "./task3.module.scss"

export default function Task3() {
    const secArrow = useRef<HTMLDivElement>(null);
    const minArrow = useRef<HTMLDivElement>(null);
    const hourArrow = useRef<HTMLDivElement>(null);

    const secMove = () => {
        const now = new Date();
        const degree = (now.getSeconds() / 60) * 360;
        secArrow.current!.style.transform = `translate(-50%,-100%) rotate(${degree}deg)`;
    }

    const minMove = () => {
        const now = new Date();
        const degree = (now.getMinutes() / 60) * 360;
        minArrow.current!.style.transform = `translate(-50%,-100%) rotate(${degree}deg)`;
    }

    const hourMove = () => {
        const now = new Date();
        const degree = (now.getHours() / 12) * 360;
        hourArrow.current!.style.transform = `translate(-50%,-100%) rotate(${degree}deg)`;
    }

    useEffect(()=>{
        if(secArrow && minArrow && hourArrow) {
            secMove();
            minMove();
            hourMove()
        }
    },[]);

    
    const intervalSec = setInterval(()=>{!secArrow.current ? clearInterval(intervalSec) : secMove()},1000);
    const intervalMin = setInterval(()=>{!minArrow.current ? clearInterval(intervalMin) : minMove()},1000);
    const intervalHour = setInterval(()=>{!hourArrow.current ? clearInterval(intervalHour) : hourMove()},1000);

    return (
        <div className={styles.clockBackground}>
            <div className={styles.secArrow} ref={secArrow}></div>
            <div className={styles.minArrow} ref={minArrow}></div>
            <div className={styles.hourArrow} ref={hourArrow}></div>
            <div className={styles.circle} ></div>
        </div>
    )
}