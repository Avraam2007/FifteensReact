import { Dispatch, SetStateAction } from "react";

export default interface IProps {
    array: number[],
    resetStats?: (() => void) | undefined;
    setArray: Dispatch<SetStateAction<number[]>>,
    side?: number | undefined,
    setSide?: Dispatch<SetStateAction<number>> | undefined
    start?: number | undefined,
    fieldSize?: number | undefined
}

export interface IFieldSizeButton {
    resetStats?: (() => void) | undefined;
    setArray: Dispatch<SetStateAction<number[]>>,
    side?: number | undefined,
    setSide?: Dispatch<SetStateAction<number>> | undefined
}