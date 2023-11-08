import { useCounter } from "../../hooks/useCounter"

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

import CounterStyles from '../../styles/ButtonsStyles/Counter.module.css'

export const CounterButtons = () => {
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
        <div className={CounterStyles.counterButtton} onClick={subtract}>
          <RemoveRoundedIcon 
            sx={{ fontSize: 25 }}
            color="action"
          />
        </div>
        <div className={CounterStyles.count} >{count}</div>
        <div className={CounterStyles.counterButtton} onClick={add}>
          <AddRoundedIcon 
            sx={{ fontSize: 25 }}
            color="action"
          />
        </div>
      </div>
    </section>
  )
}