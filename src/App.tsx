import React from 'react'
import { Contador } from './Components/Contador';
import { ContadorConHook } from './Components/ContadorConHook';
import { Login } from './Components/Login';
//import { ObjectosLiterales } from './typescript/ObjectosLiterales';
//import { TiposBasicos } from './typescript/TiposBasicos';
//import { Funciones } from './typescript/Funciones';

 const App = () => {
  return (
    <div className='mt-2'>
      <h1>App</h1>
      <hr/>

    {/*<Funciones />*/}
    {/*<Contador/>*/}
    {/*<ContadorConHook />*/}
    <Login/>
    </div>
  )
}

export default App;