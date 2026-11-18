import { FifteenArrSingleton } from "../classes/fifteenArrSingleton";
import { IFieldSizeButton } from "../interfaces/IProps";

export default function FieldSizeButton({setArray,setSide,resetStats,side = 0}:IFieldSizeButton) {
    const fifteenArrParams = FifteenArrSingleton.instance;
    
    const changeArray = (size:number)=>{
        fifteenArrParams.setArrSize(size**2);
        fifteenArrParams.updateFieldSide();
        setSide!(fifteenArrParams.getFieldSide());
        setArray(fifteenArrParams.randomArray<number>(fifteenArrParams.fillArray(fifteenArrParams.getArrSize())));
        resetStats!();
    }
    return (
        <button className="sizeOption-3" onClick={()=>changeArray(side)}>{side}</button>
    )
}