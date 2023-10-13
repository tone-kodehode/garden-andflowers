import { useReducer } from "react"


export function useCounter() {
    const [state, dispatch] = useReducer((state, action) => {
      switch(action.type) {
        case 'INCREMENT': {
          return { ...state, count: state.count + 1 }
        }
        case 'DECREMENT': {
          return { ...state, count: state.count - 1 }
        }
        default: {
          return state
        }
      }
    }, {
      count: 0
    })
    
    return [state, dispatch]
  }