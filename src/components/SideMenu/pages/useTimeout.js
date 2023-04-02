import { useState, useEffect } from 'react'

let timer = null

const useTimeout = () => {
  const [count, setCount] = useState(15)
  const [timerOn, setTimerOn] = useState(false)

  useEffect(() => {
    if (timerOn) {
      console.log('timerOn ', timerOn)

      timer = setInterval(() => {
        setCount((prev) => prev - 1)
      }, 1000)
    } else {
      console.log('timerOn ', timerOn)
      clearInterval(timer)
      setCount(15)
    }
    return () => {
      clearInterval(timer)
    }
  }, [timerOn])

  return [count, timerOn, setTimerOn]
}

export default useTimeout
