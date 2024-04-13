import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<h1>Register</h1>}></Route>
                <Route path='/login' element={<h1>Login</h1>}></Route>
                <Route path='/' element={<h1>Home</h1>}></Route>
                <Route path='*' element={<h1>404</h1>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
