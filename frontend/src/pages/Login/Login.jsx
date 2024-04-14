import { useState } from 'react'
import './Login.css'
import { useLogiing } from '../../hooks/useLogin.mjs'
import Loading from '../../components/Loading/Loading.component'
const Login = () => {
    const { isLoading, handleLogin } = useLogiing()
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const valueUpdater = (e, keyName) => {
        setValues({ ...values, [keyName]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(values)
        setValues({
            email: '',
            password: '',
        })
    }
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className='login-card'>
                    <h1>Login</h1>
                    <form>
                        <div className='input-box'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='text'
                                id='email'
                                required
                                value={values.email}
                                onChange={(e) => valueUpdater(e, 'email')}
                            />
                        </div>
                        <div className='input-box'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='password'
                                required
                                value={values.password}
                                onChange={(e) => valueUpdater(e, 'password')}
                            />
                        </div>
                        <div className='submitButton'>
                            <button type='submit' onClick={(e) => handleSubmit(e)}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}
export default Login
