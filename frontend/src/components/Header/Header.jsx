import './header.css'
import { useAuthContext } from '../../context/auth.context'
import { nameIcon } from '../../utils/nameIcon.mjs'
const Header = () => {
    const { authUser } = useAuthContext()
    const { firstname, lastname } = JSON.parse(JSON.stringify(authUser))

    return (
        <div className='header'>
            <h1>My Library</h1>
            <div className='profile'>
                <p>{nameIcon(firstname, lastname)}</p>
            </div>
        </div>
    )
}
export default Header
