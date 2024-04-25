import { useEffect } from 'react'
import { useAuthContext } from '../../context/auth.context'
import './home.css'
import { Header } from '../../components/Header/Header'
import { Content } from '../../components/Content/Content'
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
    return (
        <>
            <Header />
            <Content/>
        </>
    )
}
export default Home
