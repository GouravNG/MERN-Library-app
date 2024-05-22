import { useAuthContext } from '../../context/auth.context'
import { useLogout } from '../../hooks/useLogout.mjs'
import { nameIcon } from '../../utils/nameIcon.mjs'
import './profile.css'
export const Profilecard = () => {
    const { authUser } = useAuthContext()
    const handleLogout = useLogout()
    const { firstname, lastname, credit, booksOwned, booksRented } = JSON.parse(JSON.stringify(authUser))
    return (
        <>
            <div className='profile-top'>
                <div className='profie-top-left'>
                    <p>{`${firstname} ${lastname}`}</p>
                    <p>Credit:{credit}</p>
                </div>
                <div className='profile-top-right'>{nameIcon(firstname, lastname)}</div>
            </div>
            <div className='profile-botton'>
                <div className='books-info'>
                    <div className='booksrelated'>
                        <p>Books owned:{booksOwned}</p>
                    </div>
                    <div className='booksrelated'>
                        <p>Books borrowed: {booksRented}</p>
                    </div>
                </div>
                <div className='other-buttons'>
                    <button onClick={() => console.log("hi")}>View Full profile</button>
                    <button onClick={() => handleLogout()}>Logout</button>
                </div>
            </div>
        </>
    )
}
