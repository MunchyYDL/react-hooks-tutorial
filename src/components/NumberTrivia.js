import { useRef } from 'react'

import { useFetch, useLocalStorage, useMeasure } from '../hooks'

export const NumberTrivia = () => {
  const [count, setCount] = useLocalStorage('count', 0)
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)
  const divRef = useRef()
  const rect = useMeasure(divRef, [data])

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div ref={divRef}>{loading ? 'loading...' : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>Count: {count}</div>
      <button onClick={() => setCount(current => current + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
