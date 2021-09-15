import React from 'react'
import fetch from 'node-fetch'

function Character({ serverData }) {
  const { character } = serverData
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} />
    </div>
  )
}

export async function getServerData ({ params }) {
  let character = {}
  if (/^\d+$/.test(params.id)) {
    character = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    .then(res => res.json())
  }


  return {
    props: {
      character
    }
  }
}

export default Character