import { useEffect } from 'react'
import { useAuthContext } from '../../context/auth.context'

const Home = () => {
    const { setAuthUser } = useAuthContext()
    useEffect(() => {
        async function validate() {
            const data = await fetch('/api/auth/validate')
            if (data.status === 401) {
                localStorage.getItem('logged-user')
                setAuthUser('')
                console.log('Please Login')
            }
        }
        validate()
    })
    return <h1>Home page is in progress</h1>
}
export default Home
