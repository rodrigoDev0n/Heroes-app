import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../auth/auth"
import { DC, Marvel, AppBar } from '../heroes/heroes'
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={ <Login /> } />
                <Route path="/*" element={ <HeroesRoutes /> } />
            </Routes>
        </>
    )
}
