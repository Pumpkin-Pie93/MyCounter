import React from 'react';
import s from './Button.module.css'
type ButtonPropsType = {
    style: string
    name: string
    onClick : () => void
}

export const Button: React.FC<ButtonPropsType> = ({
   style, name, onClick }) => {

    const onClickHAndler = () => {
        onClick()
    }

    return (
        <button className={style} onClick={onClickHAndler}>{name}</button>
    )
}
























// type ButtonPropsType = {
//     name: string
//     onClick: (maxCountInput: number,minCountInput: number) => void
//     className: string
//
// }
//
// export const Button = (props: ButtonPropsType) => {
//
//     const onClickHandler = () => props.onClick(maxCountInput: number,minCountInput: number)
//
//     return (
//       <button onClick={onClickHandler} className={props.className}>{props.name}</button>
//     );
// };
//
