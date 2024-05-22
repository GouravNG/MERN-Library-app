import { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import './viewall.css'
import { useViewAll } from '../../hooks/useViewALL.mjs'

const ViewAll = () => {
    const { getViewAll } = useViewAll()
    const [allUserData, setAllUser] = useState({})
    useEffect(() => {
        async function fetchData() {
            setAllUser(await getViewAll())
        }
        fetchData()
    }, [])
    console.log(allUserData)
    return (
        <>
            <div className='view-all-container'>
                <div className='leftSide-container'>
                    <div className='nameIcon'>
                        <p>TT</p>
                    </div>
                    <div className='leftBoxes'>{`${allUserData.firstname},${allUserData.lastnaame}`}</div>
                    <div className='leftBoxes'>User since:{`${allUserData.createdAt}`}</div>
                    <div className='leftBoxes'>Credit:{`${allUserData.credit}`}</div>
                    <div className='leftBoxes'>borrwed:{`${allUserData.booksRented}`} and owned:{`${allUserData.booksOwned}`}</div>
                    <div className='leftBoxes'>Logout</div>
                </div>
                <div className='rightSide-container'>
                    <div className='rightBoxes'>Address</div>
                    <div className='rightBoxes'>BooksBorrowed: {`${allUserData.booksRented}`}</div>
                    <div className='rightBoxes'>booksOwned:{`${allUserData.booksOwned}`}</div>
                    <div className='rightBoxes'>Be a Auther</div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ViewAll
