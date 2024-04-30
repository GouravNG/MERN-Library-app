import './header.css'
import { useAuthContext } from '../../context/auth.context'
import { nameIcon } from '../../utils/nameIcon.mjs'
import { Profilecard } from '../ProfileCard/Profile.component'
const Header = () => {
    const { authUser } = useAuthContext()
    const { firstname, lastname } = JSON.parse(JSON.stringify(authUser))

    return (
        <div className='header'>
            <h1>My Library</h1>
            <div className='profile'>
                <p>{nameIcon(firstname, lastname)}</p>
                <div className='profileCard'>
                    <Profilecard />
                </div>
            </div>
        </div>
    )
}
export default Header
