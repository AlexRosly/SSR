import React from 'react'
import { ROOT } from 'navigation/CONSTANTS'
import { Link } from 'react-router-dom'
import { Math } from './Math'
// import { CodeCountry } from '../../components/codeCountry/CodeCountry'
import { UserRequestCard } from '../../components/UserRequestCard'

export default function Page1() {
  return (
    <div>
      <Link to={ROOT}>Home</Link>
      <h2>Page 1</h2>
      <Math />
      <UserRequestCard />
    </div>
  )
}
