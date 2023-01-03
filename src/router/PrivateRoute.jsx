import { useContext, useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

//Ruta privada: 
export const PrivateRoute = ({children}) => {

  const {logged} = useContext(AuthContext)
  const {pathname, search} = useLocation()
  const lastPath = pathname + search

  const validatePrevRoute = () => {
    const previusPath = localStorage.getItem('lastPath')
    if (lastPath === previusPath) return
    if (lastPath !== previusPath.toString()) {
      localStorage.setItem('lastPath', lastPath)
      console.log('guardando data')
    } 
  }

  useEffect(() => {
    validatePrevRoute()
  })
  
 return (logged)
  ? children
  : <Navigate to='/login'/>
}
