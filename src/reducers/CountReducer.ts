

export type CountStateType = {
    count: number,
    minValue: number,
    maxValue: number,
    error: string,
    message: string
};

const initialState: CountStateType =  {
    minValue: 0,
    maxValue:  1,
    count: 1,
    error: '',
    message: "Enter values and press 'set'"
};

type RedusersType = setMinValueACType | setMaxValueACType | setErrorACType | setCountACType

export const countReducer = (state: CountStateType = initialState, action: RedusersType): CountStateType => {
    switch (action.type) {
        case 'SET-MIN-VALUE': {
            return {...state, minValue: action.payload.value }
        }
        case "SET-MAX-VALUE":{
            return {...state, maxValue: action.payload.value}
        }
        case "SET-ERROR":{
            return {...state, error: action.payload.text}
        }
        case "SET-COUNT":{

            return { ...state, count: action.payload.value}
        }

        default: return state
    }
}

type setMinValueACType = ReturnType<typeof setMinValueAC>

export const setMinValueAC = (value: number) => {
    return {
        type: 'SET-MIN-VALUE',
        payload: {
            value
        }
    } as const
}

type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {
            value
        }
    } as const
}

type setErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = (text: string) => {
    return {
        type: 'SET-ERROR',
        payload: {
            text
        }
    } as const
}

type setCountACType = ReturnType<typeof setCountAC>
export const setCountAC = (value: number) => {
    return {
        type: 'SET-COUNT',
        payload: {
            value
        }

    } as const
}


