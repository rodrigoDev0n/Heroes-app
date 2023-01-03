import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../auth/auth"
import { DC, Marvel, AppBar } from '../heroes/heroes'
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={
                  <PublicRoute>
                   <Login />
                  </PublicRoute>
                } />
                <Route path="/*" element={ 
                  <PrivateRoute>
                    <HeroesRoutes />
                  </PrivateRoute> 
                } />
            </Routes>
        </>
    )
}
