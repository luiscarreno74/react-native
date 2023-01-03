import React from 'react'
import { json } from 'stream/consumers'

export const ObjectosLiterales = () => {
 const persona = {
    nombre: "luis",
    pais: "singapur",
    edad: 20
 }

  return (
    <>
    <h3>ObjectosLiterales</h3>
    <code>
        <pre>
            {JSON.stringify(persona,null,2)}
        </pre>
    </code>
    </>
  )
}
