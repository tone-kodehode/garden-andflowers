import { useCounter } from "../../hooks/useCounter"

import CounterStyles from '../../styles/ButtonsStyles/Counter.module.css'

export const Counter = () => {
  const [state, dispatch] = useCounter()
  
  let { count } = state
  
  const add = () => {
    dispatch({ type: 'INCREMENT' })
  }
  
  const subtract = () => {
    if (count > 0) {
      dispatch({ type: 'DECREMENT' })
    }
  }
  
  return (
    <section className={CounterStyles.contaner} >
      <div className={CounterStyles.counter} >
        <button className={CounterStyles.counterButtton} onClick={subtract}>-</button>
        <div className={CounterStyles.count} >{count}</div>
        <button className={CounterStyles.counterButtton} onClick={add}>+</button>
      </div>
    </section>
  )
}