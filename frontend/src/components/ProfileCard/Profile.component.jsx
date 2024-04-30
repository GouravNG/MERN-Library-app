import './profile.css'
export const Profilecard = () => {
    return (
        <>
            <div className='profile-top'>
                <div className='profie-top-left'>
                    <p>Gourav Gunaga</p>
                    <p>Credit:10</p>
                </div>
                <div className='profile-top-right'>TT</div>
            </div>
            <div className='profile-botton'>
                <div className='books-info'>
                    <div className='booksrelated'>
                        <p>Books owned:2</p>
                    </div>
                    <div className='booksrelated'>
                        <p>Books borrowed: 4</p>
                    </div>
                </div>
                <div className='other-buttons'>
                    <button>View Full profile</button>
                    <button>Logout</button>
                </div>
            </div>
        </>
    )
}
