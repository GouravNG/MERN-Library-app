import { useState } from 'react'
import Loading from '../../components/Loading/Loading.component'
import { useRegister } from '../../hooks/useRegister.mjs'
import './Register.css'

const Register = () => {
    const { isLoading, handleRegister } = useRegister()
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const valueUpdater = (e, keyName) => {
        setValues({ ...values, [keyName]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegister(values)
        setValues({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className='login-card'>
                    <h1>Register</h1>
                    <form>
                        <div className='input-box'>
                            <label htmlFor='firstname'>First Name</label>
                            <input
                                type='text'
                                id='firstname'
                                required
                                value={values.firstname}
                                onChange={(e) => valueUpdater(e, 'firstname')}
                            />
                        </div>
                        <div className='input-box'>
                            <label htmlFor='lastname'>Last Name</label>
                            <input
                                type='text'
                                id='lastname'
                                required
                                value={values.lastname}
                                onChange={(e) => valueUpdater(e, 'lastname')}
                            />
                        </div>
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
                        <div className='input-box'>
                            <label htmlFor='password'>Confirm Password</label>
                            <input
                                type='password'
                                id='confirmPassword'
                                required
                                value={values.confirmPassword}
                                onChange={(e) => valueUpdater(e, 'confirmPassword')}
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
export default Register
