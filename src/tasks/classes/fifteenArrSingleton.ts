export class FifteenArrSingleton {
    protected arrSize:number = 16;
    protected fieldSide:number = Math.sqrt(this.arrSize);
    
    static #instance : FifteenArrSingleton;

    static get instance() : FifteenArrSingleton{
        if (!FifteenArrSingleton.#instance) {
            FifteenArrSingleton.#instance = new FifteenArrSingleton();
        }

        return FifteenArrSingleton.#instance;
    }

    swapElements<T>(arr:T[],firstIdx:number,lastIdx:number) {
        if(firstIdx<0 || lastIdx>arr.length){
            throw new Error("Error: invalid index numbers");
        }
        if(!arr) {
            throw new Error("Error: invalid array");
        }
        if(arr[firstIdx] === undefined || arr[lastIdx] === undefined) {
            throw new Error("Error: invalid array values");
        }
        if(firstIdx === lastIdx) {
            return arr;
        }
        const tmp = arr[firstIdx];
        arr[firstIdx] = arr[lastIdx]
        arr[lastIdx] = tmp;
        return arr;
    }

    fillArray(x:number){
        if(x<=0) {
            return [];
        }
        const newArr:number[] = [];
        for (let i = 1; i < x; i++) {
            newArr.push(i);
        }
        newArr.push(0);

        return newArr;
    }

    randomArray<T>(arr:T[]){
        for(let i = 0; i < Math.floor(Math.random() * 89 + 10);++i) {
            this.swapElements<T>(arr, Math.floor(Math.random() * (arr.length-1)), Math.floor(Math.random() * (arr.length-1)));
        }
        return arr;
    }

    setArrSize(sizeArr:number) {
        if(sizeArr > 0 || Number.isInteger(Math.sqrt(sizeArr))) {
            this.arrSize = sizeArr;
        }
    }

    getArrSize() {
        return this.arrSize;
    }

    getFieldSide() {
        return this.fieldSide;
    }

    updateFieldSide() {
        this.fieldSide = Math.sqrt(this.arrSize);
    }
    
}
