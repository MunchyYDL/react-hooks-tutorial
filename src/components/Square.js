import React from 'react'
import { useRenderCount } from '../hooks'

export const Square = React.memo(({ n, onClick }) => {
  useRenderCount()

  return <button onClick={() => onClick(n)}>+{n}</button>
})
