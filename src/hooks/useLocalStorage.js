import { useEffect, useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    var read = JSON.parse(localStorage.getItem(key))
    // console.log(read ? `Read ${key}: ${read}` : `Init ${key}: ${initialValue}`)
    return read || initialValue
  })

  useEffect(() => {
    // console.log(`Save ${key}: ${value}`)
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
