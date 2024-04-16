import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

import './App.css'
import Loading from './components/Loading/Loading.component'
import { useAuthContext } from './context/auth.context'
const Login = lazy(() => import('./pages/Login/Login'))
const Register = lazy(() => import('./pages/Register/Register'))

function App() {
    const { authUser } = useAuthContext()
    console.log(authUser)
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={authUser ? <Navigate to='/' /> : <Register />}></Route>
                <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />}></Route>
                <Route path='/' element={authUser ? <h1>Home</h1> : <Navigate to='/login' />}></Route>
                <Route path='*' element={<h1>404</h1>}></Route>
                <Route path='/test' element={<Loading />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
