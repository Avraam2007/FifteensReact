// import { FifteenArrSingleton } from "../classes/fifteenArrSingleton";
import styles from "../fifteens.module.scss";
import IProps from "../interfaces/IProps";
import FieldSizeButton from "./FieldSizeButton";

export default function FieldSizePanel({array,setArray,setSide,resetStats}:IProps) {
    const getFieldSizeButtons = (from:number, to:number) => {
        const arr = [];
        for (let index = from; index <= to; index++) {
            arr.push(<FieldSizeButton 
                key={index} 
                setArray={setArray} 
                setSide={setSide} 
                resetStats={resetStats} 
                side={index}
                />
            );
        }
        return arr;
    }
    return (
        <div className={styles["fieldSizePanel"]}>
            {getFieldSizeButtons(3, 8)}
        </div>
    )
}