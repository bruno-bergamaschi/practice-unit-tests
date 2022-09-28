import { ICalc, useCalc } from "./useCalc"


export function Calc({firstNumber, secondNumber, operator}: ICalc) {
    const { calc } = useCalc()

    return<>
        {calc({firstNumber, secondNumber, operator})}
    </>
}