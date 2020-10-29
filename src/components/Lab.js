import React from 'react'
// import { useRenderCount } from '../hooks/useRenderCount'

export const Lab = React.memo(({ increment }) => {
  // useRenderCount()

  return <button onClick={increment}>Test</button>
})
