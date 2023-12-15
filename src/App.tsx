import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./button/Button";
import {Input} from "./input/Input";
import {CounterOne} from "./CounterOne";
import {CounterTwo} from "./CounterTwo";
import {CounterOneWithRedux} from "./CounterOneWithRedux";
import {NavLink, Route, Routes} from "react-router-dom";
import {NavLinks} from "./NavLincs";


function App() {

    return (
        <div className="App">
            <NavLinks/>
            <Routes>
                <Route path={'/'}/>
                <Route path={'/*'} element={<div className={'error'}>404</div>}/>
                <Route path={'/counterOne'} element={<CounterOne/>}/>
                <Route path={'/counterTwo'} element={<CounterTwo/>}/>
                <Route path={'/counterWithRedux'} element={<CounterOneWithRedux/>}/>
            </Routes>
        </div>
    )
}

export default App;


//----------------------------------------------------------


//
// const [minCount, setMinCount] = useState(0)
// const [maxCount, setMaxCount] = useState(1)
//
// const [count, setCount] = useState(minCount)
//
//
// const addCount = () => {
//     if (count < maxCount)
//         setCount(count + 1)
// }
// const resetCount = () => {
//         setCount(minCount)
// }

// const maxCountSet = (maxCountInput: number) => {
//     setMaxCount(maxCountInput)
// }
// const startCountSet = (minCountInput: number) => {
//     setMinCount(minCountInput)
// }
// const globalSet = () => {
//     if (count < maxCount) {
//     setCount(minCount)
// }
// }

//     const maxCountSet = (maxCountInput: number) => {
//         setMaxCount(maxCountInput)
//     }
//     const startCountSet = (minCountInput: number) => {
//         setMinCount(minCountInput)
//     }
//     const globalSet = (maxCountInput: number,minCountInput: number) => {
//         if (count < maxCount) {
//             setCount(minCount)
//             setMaxCount(maxCountInput)
//             setMinCount(minCountInput)
//         }
//     }
//
//     return (
//         <div className="App">
//             <div className={'wrapper'}>
//                 <div className={'setting'}>
//                     <Display count={count}
//                              className={'setting'}
//                              globalSet={globalSet}
//                              maxCountSet={maxCountSet}
//                              startCountSet={startCountSet}
//                              maxCount={maxCount}
//                              minCount={minCount}
//                     />
//                     <Button name={'set'}
//                             onClick={globalSet}
//                             className={count < maxCount ? 'Btn' : 'Btn' + ' ' + 'red' + ' ' + 'disabled'}
//                     />
//                 </div>
//                 <div className={'counter'}>
//                     <Display count={count}
//                              className={'counter'}
//                              globalSet={globalSet}
//                              maxCountSet={maxCountSet}
//                              startCountSet={startCountSet}
//                              maxCount={maxCount}
//                              minCount={minCount}
//                     />
//                     <div className='Btn'>
//                         <Button name={'inc'}
//                                 onClick={addCount}
//                                 className={count < maxCount ? 'Btn' : 'Btn' + ' ' + 'disabled'}
//                         />
//                         <Button name={'reset'}
//                                 onClick={resetCount}
//                                 className={count === minCount ? 'Btn' + ' ' + 'disabled' : 'Btn'}/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App;
