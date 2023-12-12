import React from 'react';
import s from './Display.module.css'



export type DisplayPropsType = {
    count: number
}

export const Display: React.FC<DisplayPropsType> = ({count}) => {
    return (
        <div className={s.display}>
            <h1>{count}</h1>
        </div>
    );
};
































// type CountPropsType = {
//     count: number
//     className: string
//     globalSet:(start: number, max: number) => void
//     maxCountSet:(value: number) => void
//     startCountSet: (value: number) => void
//     maxCount: number
//     minCount: number
// }
//
// export const Display = (props: CountPropsType) => {
//
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         props.maxCountSet(Number(e.currentTarget.value))
//         // console.log((Number(e.currentTarget.value)))
//     }
//     const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         props.startCountSet(Number(e.currentTarget.value))
//         console.log((Number(e.currentTarget.value)))
//     }
//
//     return (
//         <div className={ props.count < props.maxCount? 'Display': 'Display'+' ' +'red' }>
//             {
//                 (props.className === 'setting')?
//                 <div>
//                     <div>Max value<input
//                         value={props.maxCount}
//                         onChange={onChangeHandler}
//                         type={"number"}
//                         className={props.count < props.maxCount ? '' : 'red' + ' '+ 'disabled'}/></div>
//                     <div>Start value<input
//                         value={props.minCount}
//                         type={"number"}
//                         onChange={onChangeStartHandler}
//                         className={props.count < props.maxCount ? '' : 'red' + ' '+ 'disabled'}
//                     /></div>
//                 </div>
//                 : props.count < props.maxCount?<h1>{props.count}</h1>: <h2 className={'red'}>Current values are not correct!</h2>
//             }
//         </div>
//     // <div className={ props.count < 5? 'Display': 'Display'+' ' +'red' }>
//     //         <h1>{props.count}</h1>
//     //     </div>
//     );
// };

