import { useCallback, useState } from 'react'

// Components
import { Form, Hello, Lab, NumberTrivia, Square, Toggle } from '../components'

// Others
export const Test = () => {
  const [count, setCount] = useState(0)
  const increment = useCallback(
    add => {
      setCount(count => count + add)
    },
    [setCount]
  )

  const favNums = [7, 21, 37]

  return (
    <>
      <h2>Test</h2>
      <div>
        <Toggle showContent={true}>
          <div>Count: {count}</div>
          <button onClick={() => setCount(count + 1)}>increment</button>
        </Toggle>
        <Toggle showContent={false}>
          <Lab increment={increment} />
          <div>Count: {count}</div>
          {favNums.map(n => (
            <Square n={n} onClick={increment} key={n} />
          ))}
        </Toggle>
        <Toggle>
          <NumberTrivia />
        </Toggle>
        <Toggle>
          <Hello />
        </Toggle>
        <Toggle>
          <Form />
        </Toggle>
      </div>
    </>
  )
}
