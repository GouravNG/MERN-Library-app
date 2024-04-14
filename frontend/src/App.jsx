import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

import './App.css'
import Loading from './components/Loading/Loading.component'
const Login = lazy(() => import('./pages/Login/Login'))

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<h1>Register</h1>}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/' element={<h1>Home</h1>}></Route>
                <Route path='*' element={<h1>404</h1>}></Route>
                <Route path='/test' element={<Loading/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
