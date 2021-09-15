import React from 'react'
import { Link } from 'gatsby'

import fetch from 'node-fetch'

function Characters({ serverData }) {
  const { characters } = serverData
  return (
    <ul>
      {
        characters.map(character => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <Link to={`/characters/${character.id}/`}>{character.name}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Characters

export async function getServerData ({ params }) {
  let results = []
  let latest = { next: true } // get pointer
  while (latest.next) {
    const next = typeof latest.next === 'string' ? latest.next : `https://rickandmortyapi.com/api/character`
    const data = await fetch(next)
      .then(res => res.json())

    latest = data.info
    results = results.concat(data.results)
  }

  return {
    props: {
      characters: results
    }
  }
}