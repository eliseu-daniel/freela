import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom"

createBrowserRouter(
    createRoutesFromElements(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
)
