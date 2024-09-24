import * as React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { Login } from './components/Login'
import { Signup } from './components/signup'
import { Home } from './components/home'

export const router = 
createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="home" element={<Home />} />
        </Route>
    )
)
