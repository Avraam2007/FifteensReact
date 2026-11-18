import { FifteenArrSingleton } from "../classes/fifteenArrSingleton";
import styles from "../fifteens.module.scss"
import { StatsSingleton } from "../classes/statsSingleton";
import IProps from "../interfaces/IProps";
import { useEffect } from "react";

export default function ControlPanel({array,setArray,side}:IProps) {
    const fifteenArrParams = FifteenArrSingleton.instance;
    const stats = StatsSingleton.instance;
    
    const fieldSide = side!;
    const arrSide = fifteenArrParams.getArrSize();

    const winCheck = (array:number[]) => {
        const fill = fifteenArrParams.fillArray(arrSide);
        for (let i = 0; i < array.length; ++i) {
            if (array[i] !== fill[i]) return false;
        }
        return true;
    }


    const moveElement = (direct:"up"|"down"|"left"|"right")=>{
            return () => {
                const tmpArray = [...array];
                const zeroValue = tmpArray.findIndex((x) => x === 0);
                let change:number;
                let check:boolean;
                switch(direct) {
                    case "up":
                        change = fieldSide;
                        check = Math.floor(zeroValue/fieldSide) !== fieldSide-1;
                        break;
                    case "down":
                        change = -fieldSide;
                        check = Math.floor(zeroValue/fieldSide) !== 0;
                        break;
                    case "left":
                        change = 1;
                        check = zeroValue%fieldSide !== fieldSide-1;
                        break;
                    case "right":
                        change = -1;
                        check = zeroValue%fieldSide !== 0;
                        break;
                    default:
                        console.log("Error");
                        return;
                }
                if(check) {
                    fifteenArrParams.swapElements<number>(tmpArray,zeroValue,zeroValue+change);
                    setArray(tmpArray);
                    stats.setMoves(stats.getMoves()+1);
                    if(winCheck(tmpArray)) alert(`You win!`);
                }
            }
        }
    
        const upElement = moveElement("up");
        const downElement = moveElement("down");
        const leftElement = moveElement("left");
        const rightElement = moveElement("right");
    
        useEffect(() => {
            const keys = (event:KeyboardEvent) => 
                {
                    if(event.key === "ArrowDown") downElement()
                    if(event.key === "ArrowUp") upElement()
                    if(event.key === "ArrowLeft") leftElement()
                    if(event.key === "ArrowRight") rightElement()
                };
            document.addEventListener("keydown", keys);
    
            return () => {
                document.removeEventListener("keydown", keys);
            }
    
        },[array])
    
    return (
        <div className={styles['arrowContainer']}>
            <button type="button" className={`${styles['arrowButtonUp']} fa-solid fa-angle-up`} id="buttonUp" onClick={upElement} onKeyDown={(event) => {if(event.key === "Escape") upElement()}}></button>
            <button type="button" className={`${styles['arrowButtonDown']} fa-solid fa-angle-down`} id="buttonDown" onClick={downElement}></button>
            <button type="button" className={`${styles['arrowButtonLeft']} fa-solid fa-angle-left`} id="buttonLeft" onClick={leftElement}></button>
            <button type="button" className={`${styles['arrowButtonRight']} fa-solid fa-angle-right`} id="buttonRight" onClick={rightElement}></button>
        </div>
    );
}