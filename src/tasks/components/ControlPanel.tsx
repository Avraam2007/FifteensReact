import { useEffect, useState } from "react";
import styles from "../fifteens.module.scss"
import { FifteenArrSingleton } from "../classes/fifteenArrSingleton";
import { StatsSingleton } from "../classes/statsSingleton";
import IProps from "../interfaces/IProps";

export default function ControlPanel({array,setArray,start,resetStats}:IProps) {

    const fifteenArrParams = FifteenArrSingleton.instance;
    const stats = StatsSingleton.instance;

    const prependZero = (number:number,length:number) => {
        if(number < 0 || length < 0) {
            throw new Error("Error: invalid parameters in prependZero function")
        }
        const numberArray = number.toString().split("");
        const zeroArray = new Array(Math.max(length - numberArray.length+1,0)).join("0");
        return zeroArray.concat(numberArray.join(""));
    }

    const [timerStr, setTimerStr] = useState<string>(`00:00`);

    const winCheck = (array:number[]) => {
        const fill = fifteenArrParams.fillArray(fifteenArrParams.getArrSize());
        for (let i = 0; i < array.length; ++i) {
            if (array[i] !== fill[i]) return false;
        }
        return true;
    }

    const isWon = winCheck(array);

    const newRandom = () => {
        setArray(fifteenArrParams.randomArray<number>(fifteenArrParams.fillArray(fifteenArrParams.getArrSize())))
        resetStats!();
    }

    const updateTime = () => {
        const now = new Date().getTime();
        const distance = now - start!;
        const millsec = distance%1000;
        const sec = Math.floor((distance % (1000 * 60)) / 1000);
        const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimerStr(`${prependZero(min,2)}:${prependZero(sec,2)}.${prependZero(millsec,3)}`);

    }

    useEffect(() => {
            if(isWon) {
                return;
            }

            let frameID:number;
    
            const tick = () => {
                updateTime()
                frameID = requestAnimationFrame(tick);
            }

            frameID = requestAnimationFrame(tick);
    
            return () => {
                cancelAnimationFrame(frameID);
            }
    
        },[isWon, start])

    return (
        <div className={styles['controlBox']}>
            <div className={styles['timerBox']}>
                <p className={styles['timer']}>{timerStr ?? "00:00"}</p>
            </div>
            <div className={styles['movesBox']}>
                <p className={styles['moves']}>{stats.getMoves() ?? "0"}</p>
            </div>
            <button type="button" className={styles['randomBtn']} id="random" onClick={newRandom}>Restart</button>
        </div>
    );
}