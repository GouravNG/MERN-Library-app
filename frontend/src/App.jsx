import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

import './App.css'
import { useAuthContext } from './context/auth.context'
const Login = lazy(() => import('./pages/Login/Login'))
const Register = lazy(() => import('./pages/Register/Register'))
const Home = lazy(() => import('./pages/Home/Home'))
const ViewAll = lazy(() => import('./pages/FullProfile/viewAll'))

function App() {
    const { authUser } = useAuthContext()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={authUser ? <Navigate to='/' /> : <Register />}></Route>
                <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />}></Route>
                <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />}></Route>
                <Route path='/viewfullprofile' element={<ViewAll/>}></Route>
                <Route path='*' element={<h1>404</h1>}></Route>
                <Route path='/test' element={<ViewAll/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
