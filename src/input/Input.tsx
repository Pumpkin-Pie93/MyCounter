import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

export type InputPropsType = {
    style: string
    name: string
    value: number
    onChange: (value: number)=> void
}


export const Input: React.FC<InputPropsType> = ({style,name, value, onChange}) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        onChange(value)
    }

    return (
        <div>
            <span>{name}</span><input className={style} value = {value} type={"number"} onChange={onChangeHandler}/>
        </div>
    );
};














// import React, {ChangeEvent} from 'react';
//
// export const Input = () => {
//
//     const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         const maxValue = e.currentTarget.value
//     }
//     const onMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         const minValue = e.currentTarget.value
//     }
//
//     return (
//         <div>
//             <div>Max value<input onChange={onMaxChangeHandler}/></div>
//             <div>Start value<input onChange={onMinChangeHandler}/></div>
//         </div>
//     );
// };
//
