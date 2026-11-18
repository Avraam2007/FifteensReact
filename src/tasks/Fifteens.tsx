import { useState } from "react"
import styles from "./fifteens.module.scss"
import { FifteenArrSingleton } from "./classes/fifteenArrSingleton";
import ControlPanel from "./components/ControlPanel";
import {Helmet} from "react-helmet";
import ArrowPanel from "./components/ArrowPanel";
import FieldSizePanel from "./components/FieldSizePanel";
import { StatsSingleton } from "./classes/statsSingleton";

export default function Fifteens() {

    const stats = StatsSingleton.instance;
    const fifteenArrParams = FifteenArrSingleton.instance;
    const arrSide = fifteenArrParams.getArrSize();
    const [fieldSide, setFieldSide] = useState<number>(fifteenArrParams.getFieldSide());
    const [start,setStart] = useState<number>(new Date().getTime());

    const [fifteenArray, setFifteenArray] = useState<number[]>(fifteenArrParams.randomArray<number>(fifteenArrParams.fillArray(arrSide)));

    const resetStats = () => {
        stats.setSeconds(0);
        stats.setMoves(0);
        setStart(new Date().getTime());
    }

    return (
        <>
            <Helmet>
                <title>15 Puzzle Game</title>
            </Helmet>
            <div className={styles['content']}>
                <ControlPanel array={fifteenArray} setArray={setFifteenArray} start={start} resetStats={resetStats}/>
                <div className={styles['customField']}>
                    <div className={`${styles['field']} ${fieldSide}`}>
                        {fifteenArray.map((el,idx)=> {
                            return <div 
                                id={`block-${Math.floor(idx/fieldSide)}-${idx%fieldSide}`} 
                                key={`block-${Math.floor(idx/fieldSide)}-${idx%fieldSide}`} 
                                className={el === 0 ? styles['zeroBlock'] : styles['block']}>
                                        <p className={styles['blockNumber']}>{el}</p>
                                    </div>;
                        })}
                    </div>
                    <FieldSizePanel array={fifteenArray} setArray={setFifteenArray} setSide={setFieldSide} resetStats={resetStats}/>
                </div>
                <ArrowPanel array={fifteenArray} setArray={setFifteenArray} side={fieldSide}/>
            </div>
        </>
    )
}