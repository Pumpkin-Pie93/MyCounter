import React, {useEffect, useState} from 'react';
import {Input} from "./input/Input";
import {Button} from "./button/Button";

export const CounterTwo = () => {

    useEffect(() => {
        getMaxValueFromLocalStorage()
        getMinValueFromLocalStorage()
    }, []);

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxvalue] = useState(minValue + 1)
    const [count, setCount] = useState(minValue)
    const [error, setError] = useState('')
    const [settingMode, setSettingMode] = useState(false)

    const setMaxValueToLocalStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    const setMinValueToLocalStorage = () => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
    }
    const getMaxValueFromLocalStorage = () => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxvalue(newMaxValue)
        }


    }
    const getMinValueFromLocalStorage = () => {
        let minValueAsString = localStorage.getItem('minValue')
        if (minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            setMinValue(newMinValue)
        }
    }

    const addCountValue = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }
    const resetCount = () => {
        if (minValue < maxValue) {
            setCount(minValue)
        }

    }
    const setMax = (value: number) => {
        if (value <= minValue || minValue < 0) {
            setError('ERROR! Enter correct value')
            setMaxvalue(value)
        } else {
            setError('')
            setMaxvalue(value)
        }

    }
    const setMin = (value: number) => {
        if (value >= maxValue || value < 0) {
            setError('ERROR! Enter correct value')
            setMinValue(value)
        } else {
            setError('')
            setMinValue(value)
        }
    }
    const setValues = () => {
        setSettingMode(!settingMode)
        setMax(maxValue)
        setCount(minValue)
        setMaxValueToLocalStorage()
        setMinValueToLocalStorage()
    }

    const countStyle = (count >= maxValue) ? "countError" : "countEnd"
    const inputStyle = (minValue >= maxValue || minValue < 0) ? "inputError" : ""
    const buttonStyle = (minValue >= maxValue || minValue < 0) ? "button" + " " + "buttonDisabled" : "button"
    const buttonIncStyle = (count === maxValue) ? "button" + " " + "buttonDisabled" : "button"


    return (
        <> {
            !settingMode
                ?
                <div className={'wrapper'}>
                    {error ? <h1 className={'error'}>{error}</h1> : <h1 className={countStyle}>{count}</h1>}
                    <div className={'buttons'}>
                        <Button style={buttonIncStyle} name={'Inc'} onClick={addCountValue}/>
                        <Button style={buttonStyle} name={'Reset'} onClick={resetCount}/>
                        <Button style={buttonStyle} name={'Set'} onClick={setValues}/>
                    </div>
                </div>
                :
                <div className={'wrapper'}>
                    <div className={'inputs'}>
                        <Input style={inputStyle} name={'Max'} value={maxValue} onChange={setMax}/>
                        <Input style={inputStyle} name={'Min'} value={minValue} onChange={setMin}/>
                    </div>
                    <div className={'buttons'}>
                        <Button style={buttonStyle} name={'Set'} onClick={setValues}/>
                    </div>
                </div>
        }
        </>

    );
};
