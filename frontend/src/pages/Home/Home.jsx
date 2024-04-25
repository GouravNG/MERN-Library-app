import { useEffect, lazy, Suspense } from 'react'
import { useAuthContext } from '../../context/auth.context'
import './home.css'
const Loading = lazy(() => import('../../components/Loading/Loading.component'))
const Header = lazy(() => import('../../components/Header/Header'))
const Content = lazy(() => import('../../components/Content/Content'))
const Footer = lazy(() => import('../../components/Footer/Footer'))

const Home = () => {
    const { setAuthUser } = useAuthContext()
    useEffect(() => {
        async function validate() {
            const data = await fetch('/api/auth/validate')
            if (data.status === 401) {
                localStorage.removeItem('logged-user')
                setAuthUser('')
                console.log('Session Exprired')
            }
        }
        validate()
    },[])
    return (
        <Suspense fallback={<Loading />}>
            <>
                <Header />
                <Content />
                <Footer />
            </>
        </Suspense>
    )
}

export default Home
