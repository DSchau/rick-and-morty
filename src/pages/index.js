import * as React from 'react'
import { Link } from 'gatsby'

export default function Home (props) {
  return (
    <>
      <h1>Rick and Morty API. So Zany! 😛</h1>
      <Link to="/characters/">Characters</Link>
    </>
  )
}
