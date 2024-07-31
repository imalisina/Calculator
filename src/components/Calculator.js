import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [previousValue, setPreviousValue] = useState(null);
    const [isOperatorClicked, setIsOperatorClicked] = useState(false);

    const handleNumberClick = (value) => {
        if (isOperatorClicked) {
            setCurrentValue(value);
            setIsOperatorClicked(false);
        } else {
            setCurrentValue(currentValue === '0' ? value : currentValue + value);
        }
    };

    const handleOperatorClick = (value) => {
        if (operator && !isOperatorClicked) {
            calculate();
        }
        setOperator(value);
        setPreviousValue(currentValue);
        setIsOperatorClicked(true);
    };

    const handleClear = () => {
        setCurrentValue('0');
        setOperator(null);
        setPreviousValue(null);
    };

    const handleEqual = () => {
        calculate();
        setOperator(null);
        setPreviousValue(null);
    };

    const calculate = () => {
        if (operator && previousValue !== null) {
            const a = parseFloat(previousValue);
            const b = parseFloat(currentValue);
            let result;
            switch (operator) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
                default:
                    return;
            }
            setCurrentValue(result.toString());
        }
    };

    const handleDecimalClick = () => {
        if (!currentValue.includes('.')) {
            setCurrentValue(currentValue + '.');
        }
    };

    return (
        <div className="calculator">
            <Display value={currentValue} />
            <div className="buttons">
                <Button id="clear" value="AC" onClick={handleClear} />
                <Button id="divide" value="/" onClick={handleOperatorClick} />
                <Button id="multiply" value="*" onClick={handleOperatorClick} />
                <Button id="seven" value="7" onClick={handleNumberClick} />
                <Button id="eight" value="8" onClick={handleNumberClick} />
                <Button id="nine" value="9" onClick={handleNumberClick} />
                <Button id="subtract" value="-" onClick={handleOperatorClick} />
                <Button id="four" value="4" onClick={handleNumberClick} />
                <Button id="five" value="5" onClick={handleNumberClick} />
                <Button id="six" value="6" onClick={handleNumberClick} />
                <Button id="add" value="+" onClick={handleOperatorClick} />
                <Button id="one" value="1" onClick={handleNumberClick} />
                <Button id="two" value="2" onClick={handleNumberClick} />
                <Button id="three" value="3" onClick={handleNumberClick} />
                <Button id="zero" value="0" onClick={handleNumberClick} />
                <Button id="decimal" value="." onClick={handleDecimalClick} />
                <Button id="equals" value="=" onClick={handleEqual} />
            </div>
        </div>
    );
};

export default Calculator;
