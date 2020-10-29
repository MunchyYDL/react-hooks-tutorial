import React from 'react'

import { useForm } from '../hooks'

export const Form = () => {
  const [values, handleChange] = useForm({ email: '', password: '' })

  return (
    <div>
      <input
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  )
}
