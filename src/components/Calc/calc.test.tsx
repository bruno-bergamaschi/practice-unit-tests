import { renderHook } from '@testing-library/react';
import { useCalc } from './useCalc';

describe('Calc hook tests', () => {
    it('sum', () => {
        const { result } = renderHook(() => useCalc());
        
        const calc = result.current.calc;

        const expected = calc({firstNumber: 1, secondNumber: 2, operator: 'sum'});

        
        expect(expected).toBe(3)
        expect(typeof calc).toBe('function')
    })
    it('subtraction', () => {
        const { result } = renderHook(() => useCalc());

        const calc = result.current.calc;

        const expected = calc({firstNumber: 5, secondNumber: 2, operator: 'subtraction'});

        expect(expected).toBe(3)
        expect(typeof calc).toBe('function')
    })
    it('multiplication', () => {
        const { result } = renderHook(() => useCalc());

        const calc = result.current.calc;

        const expected = calc({firstNumber: 3, secondNumber: 5, operator: 'multiplication'});

        expect(expected).toBe(15)
        expect(typeof calc).toBe('function')
    })
    it('division', () => {
        const { result } = renderHook(() => useCalc());

        const calc = result.current.calc;

        const expected = calc({firstNumber: 10, secondNumber: 2, operator: 'division'});

        expect(expected).toBe(5)
        expect(typeof calc).toBe('function')
    })
})