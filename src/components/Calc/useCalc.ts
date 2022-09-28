export interface ICalc {
    firstNumber: number,
    secondNumber: number,
    operator: 'sum' | 'subtraction' | 'multiplication' | 'division' 
}

export const useCalc = () => {

    const operatorResult = {
        sum: (firstNumber: number, secondNumber: number) => firstNumber + secondNumber,
        subtraction: (firstNumber: number, secondNumber: number) => firstNumber - secondNumber,
        multiplication: (firstNumber: number, secondNumber: number) => firstNumber * secondNumber,
        division: (firstNumber: number, secondNumber: number) => firstNumber / secondNumber,
    }
    

    function calc({firstNumber, secondNumber, operator} : ICalc): number {
        return operatorResult[operator](firstNumber,secondNumber)
    }

    return {calc}
}