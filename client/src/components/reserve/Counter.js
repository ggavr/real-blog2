import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment, incrementByAmount, resetState} from '../../toolkitRedux/toolkitReducer'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Amount"
                    onClick={() => dispatch(incrementByAmount(count))}
                >
                    Amount
                </button>
                <button
                    aria-label="Reset"
                    onClick={() => dispatch(resetState(count))}
                >
                   Reset
                </button>
            </div>
        </div>
    )
}