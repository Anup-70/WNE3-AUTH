import React from 'react'
import { doLogout } from '../app/actions'


const Logout = () => {
  return (
    <form action={doLogout}>
        <button type="submit" className="bg-blue-400 my-2 text-white p-1">
            Logout
        </button>
    </form>
  )
}

export default Logout