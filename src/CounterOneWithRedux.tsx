import React, {useEffect, useState} from 'react';
import {Input} from "./input/Input";
import {Button} from "./button/Button";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "./Hooks/Hooks";
import {setCountAC, setErrorAC, setMaxValueAC, setMinValueAC} from "./reducers/CountReducer";

export const CounterOneWithRedux = () => {

    const countState = useAppSelector(state=> state.count)
    const dispatch = useDispatch()

    useEffect(() => {
        getMaxValueFromLocalStorage()
        getMinValueFromLocalStorage()
    }, []);



    const setMaxValueToLocalStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(countState.maxValue))
    }
    const setMinValueToLocalStorage = () => {
        localStorage.setItem('minValue', JSON.stringify(countState.minValue))
    }

    const getMaxValueFromLocalStorage = () => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            // setMaxvalue(newMaxValue)
            dispatch(setMaxValueAC(newMaxValue))
        }


    }
    const getMinValueFromLocalStorage = () => {
        let minValueAsString = localStorage.getItem('minValue')
        if (minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            // setMinValue(newMinValue)
            dispatch(setMinValueAC(newMinValue))
        }
    }


    const addCountValue = () => {
        if (countState.count < countState.maxValue) {
            // setCount(countState.count + 1)
            dispatch(setCountAC(countState.count + 1))
        }
    }
    const resetCount = () => {
        if (countState.minValue < countState.maxValue) {
            // setCount(countState.minValue)
            dispatch(setCountAC(countState?.minValue))
        }

    }
    const setMax = (value: number) => {
        if (value <= countState.minValue || countState.minValue < 0) {
            // setError('ERROR! Enter correct value')
            dispatch(setErrorAC('ERROR! Enter correct value'))
            // setMaxvalue(value)
            dispatch(setMaxValueAC(value))
        } else {
            // setError(countState.message)
            dispatch(setErrorAC(countState?.message))
            // setMaxvalue(value)
            dispatch(setMaxValueAC(value))
        }

    }
    const setMin = (value: number) => {
        if (value >= countState.maxValue || value < 0) {
            //setError('ERROR! Enter correct value')
            dispatch(setErrorAC('ERROR! Enter correct value'))
            //setMinValue(value)
            dispatch(setMinValueAC(value))
        } else {
            //setError(countState.message)
            dispatch(setErrorAC(countState?.message))
            //setMinValue(value)
            dispatch(setMinValueAC(value))
        }
    }
    const setValues = () => {
        // setMax(countState.maxValue)
        dispatch(setMaxValueAC(countState.maxValue))
        // setCount(countState.minValue)
        dispatch(setCountAC(countState.minValue))
        // setError('')
        dispatch(setErrorAC(''))
        setMaxValueToLocalStorage()
        setMinValueToLocalStorage()
    }


    const countStyle = (countState.count >= countState.maxValue) ? "countError" + ' ' + 'error' : "countEnd"
    const errorStyle = (countState.minValue >= countState.maxValue || countState.minValue < 0 || countState.maxValue < 0) ? "countError" : "countMessage"
    const inputStyle = (countState.minValue >= countState.maxValue || countState.minValue < 0) ? "inputError" : ""
    const buttonStyle = (countState.minValue >= countState.maxValue || countState.minValue < 0) ? "button" + " " + "buttonDisabled" : "button"
    const buttonIncStyle = (countState.count === countState.maxValue) ? "button" + " " + "buttonDisabled" : "button"


    return (
        <>
            <div className={'wrapper'}>
                <div className={'inputs'}>
                    <Input style={inputStyle} name={'Max'} value={countState.maxValue} onChange={setMax}/>
                    <Input style={inputStyle} name={'Min'} value={countState.minValue} onChange={setMin}/>
                </div>
                <div className={'buttons'}>
                    <Button style={buttonStyle} name={'Set'} onClick={setValues}/>
                </div>

            </div>
            <div className={'wrapper'}>
                {countState.error ? <h1 className={errorStyle}>{countState.error}</h1> : <h1 className={countStyle}>{countState.count}</h1>}
                <div className={'buttons'}>
                    <Button style={buttonIncStyle} name={'Inc'} onClick={addCountValue}/>
                    <Button style={buttonStyle} name={'Reset'} onClick={resetCount}/>
                </div>

            </div>
        </>

    );
};

