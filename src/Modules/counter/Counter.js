import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// counterSlice.js import 
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from "./counterSlice";
// useSelector (redux에서 필요한 데이터 추출)
// module로 사용하면 겹치치 않고 사용가능 
import styles from '../counter/Counter.module.css';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("2");
    
    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    // style 중복 x
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}> + </button>
                <span className={styles.value}>{count}</span>
                
                <button 
                    className={styles.button}
                    aria-label= "Decrement value"
                    onClick={() => {dispatch(decrement())}}>-</button>
            </div>
            
            <div className={styles.row}>          
            <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
            </div>
        </div>
    )
}