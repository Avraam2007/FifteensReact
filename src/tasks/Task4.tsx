import { useRef, useState } from "react"

export default function Task4() {
    const generateDefArray = (x:number,y:number)=>{
        const defArray : boolean[][] = []
        for (let i = 0; i < x; i++) {
            const arr : boolean[] = [];
            for (let j = 0; j < y; j++) {
                arr.push(false);
            }
            defArray.push(arr);
        }
        return defArray;
    }

    const widthInput = useRef<HTMLInputElement>(null);
    const heightInput = useRef<HTMLInputElement>(null);

    const [checkArray, setCheckArray] = useState<boolean[][]>(generateDefArray(5,5));

    const markCenter = (width:number,height:number) => {
        if(width <=0 || height <=0) return;
        const sampleArray = [...generateDefArray(width,height)];

        const firstRow = sampleArray[0];
        if (!firstRow || firstRow.length === 0) return;

        // const rows = sampleArray.length;
        // const cols = firstRow.length;

        // const xIndices = rows % 2 === 1 
        //     ? [Math.floor(rows / 2)] 
        //     : [rows / 2 - 1, rows / 2];

        // const yIndices = cols % 2 === 1 
        //     ? [Math.floor(cols / 2)] 
        //     : [cols / 2 - 1, cols / 2];

        if (sampleArray == null || sampleArray.length === 0)  return;
        if (sampleArray.length % 2 === 1) {
            const centerX : number = Math.floor(sampleArray.length/2);
            if (firstRow.length % 2 === 1) {
                const centerY : number = Math.floor(firstRow.length/2);
                sampleArray[centerX][centerY] = true;
            }
            else {
                const centerY1 : number = firstRow.length/2;
                const centerY2 : number = firstRow.length/2 - 1;
                sampleArray[centerX][centerY1] = sampleArray[centerX][centerY2] = true;
            }
        }
        else {
            const centerX1 : number = sampleArray.length/2;
            const centerX2 : number = sampleArray.length/2 - 1;
            if (firstRow.length % 2 === 1) {
                const centerY : number = Math.floor(firstRow.length/2);
                sampleArray[centerX1][centerY] = sampleArray[centerX2][centerY] = true;
            }
            else {
                const centerY1 : number = firstRow.length/2;
                const centerY2 : number = firstRow.length/2 - 1;
                sampleArray[centerX1][centerY1] = true;
                sampleArray[centerX1][centerY2] = true;
                sampleArray[centerX2][centerY1] = true;
                sampleArray[centerX2][centerY2] = true;
            }
        }
        setCheckArray(sampleArray);
    }

    return (
        <>
            <ul>
                {checkArray.map((e,idx) => {
                return (<li key={`${idx} r`}>
                    {e.map((element,idx2) => {
                        return (
                            <input key={`${idx} ${idx2}`} type="checkbox" name="" id="" checked={element} readOnly/>
                        )
                    })}
                </li>)
            })}
            </ul>
            <label htmlFor="">
                Enter width: 
                <input type="number" inputMode="numeric" name="" defaultValue={0} id="width" ref={widthInput}/>
            </label>
            <label htmlFor="">
                Enter height: 
                <input type="number" inputMode="numeric" name="" defaultValue={0} id="height" ref={heightInput}/>
            </label>
            <button type="button" id="button" onClick={()=>markCenter(Number(widthInput.current?.value), Number(heightInput.current?.value))}>Mark center</button>
        </>
    )
}


        // if (sampleArray.length % 2 === 1) {
        //     const centerX : number = Math.floor(sampleArray.length/2);
        //     if (firstRow.length % 2 === 1) {
        //         const centerY : number = Math.floor(firstRow.length/2);
        //         sampleArray[centerX][centerY] = true;
        //     }
        //     else {
        //         const centerY1 : number = firstRow.length/2;
        //         const centerY2 : number = firstRow.length/2 - 1;
        //         sampleArray[centerX][centerY1] = sampleArray[centerX][centerY2] = true;
        //     }
        // }
        // else {
        //     const centerX1 : number = sampleArray.length/2;
        //     const centerX2 : number = sampleArray.length/2 - 1;
        //     if (firstRow.length % 2 === 1) {
        //         const centerY : number = Math.floor(firstRow.length/2);
        //         sampleArray[centerX1][centerY] = sampleArray[centerX2][centerY] = true;
        //     }
        //     else {
        //         const centerY1 : number = firstRow.length/2;
        //         const centerY2 : number = firstRow.length/2 - 1;
        //         sampleArray[centerX1][centerY1] = true;
        //         sampleArray[centerX1][centerY2] = true;
        //         sampleArray[centerX2][centerY1] = true;
        //         sampleArray[centerX2][centerY2] = true;
        //     }
        // }