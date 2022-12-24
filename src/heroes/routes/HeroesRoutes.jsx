import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AppBar } from '../components'
import { Marvel, DC, Search, Hero } from '../heroes'

export const HeroesRoutes = () => {
    return (
        <>
            <AppBar />
            <div className='container'>
                <Routes>
                    <Route path="/marvel" element={<Marvel />} />
                    <Route path="/dc" element={<DC />} />
                    <Route path="/search" element={ <Search /> } />
                    <Route path="/heroe/:id" element={ <Hero /> } />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}
