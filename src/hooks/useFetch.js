import { useEffect, useState } from 'react'
import { useIsMounted } from './useIsMounted'

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true })
  const isMounted = useIsMounted()

  useEffect(() => {
    setState({ data: null, loading: true })

    fetch(url)
      .then(resp => resp.text())
      .then(text => {
        // setTimeout(() => {
        if (isMounted.current) {
          setState({ data: text, loading: false })
        }
        // }, 1000)
      })
      .catch(e => {
        console.warn(`Fetch error: ${e.message}`)
      })
  }, [url, isMounted])

  return state
}
