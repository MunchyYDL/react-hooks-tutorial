import { useState } from 'react'

export const Toggle = ({ showContent, children }) => {
  const [show, setShow] = useState(showContent || false)

  return (
    <div
      style={{
        border: '1px solid grey',
        borderRadius: '10px',
        padding: '5px',
        margin: '10px',
      }}
    >
      <div>{show && children}</div>
      <button onClick={() => setShow(s => !s)}>Toggle</button>
    </div>
  )
}
