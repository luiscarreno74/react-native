import { lutimesSync } from "fs"
import { type } from "os"
import { useEffect, useReducer } from "react"

interface authState {
 validando: boolean,
 token: null | string,
 username: string,
 nombre: string
}
const initialState:authState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}
type loginAction = {
  nombre: string,
  username: string
}

type authAction = 
| {type: 'logout'}
| {type: 'login', payload: loginAction}


const reducer = (state:authState, action:authAction):authState =>{
  switch (action.type) {
    case 'logout':

      return {
        validando: false,
        token: null,
        nombre: '',
        username: ''
      }
      case 'login':
      const {nombre, username} = action.payload
      return {
        validando: false,
        token: '123',
        nombre: nombre,
        username: username
      }
  
    default:
      return state;
  }
}

export const Login = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      setTimeout(() => {
        dispatch({type: "logout"})
      }, 1500);
    }, [])
    
    if(state.validando){
      return(
      <>
      <h3>Login</h3>
    <div className="alert alert-info">
     Validando...
    </div>
      </>
      )
    }

const login = () => {
  dispatch({type: 'login', payload: {nombre: 'luis', username: 'hello'}})
}
const logout = () => {
  dispatch({type: 'logout'})
}


  return (
    <>
    <h3>Login</h3>
    {
      (state.token) ? <div className="alert alert-success">
      Autenticado como {state.nombre}
     </div>
     : <div className="alert alert-danger">
     No autenticado
    </div>


    }
    {
      (state.token)?  
      <button className="btn btn-danger" onClick={logout}>
        Logout
        </button>

      : 

      <button className="btn btn-primary" onClick={login}>
      Login
      </button>

        

    }
    
    


    
    {//&nbsp;
    }
  
    </>
  )
}
