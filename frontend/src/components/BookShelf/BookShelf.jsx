/* eslint-disable react/prop-types */
import jData from '../../dummyData/getAllBook.json'
import './bookShelf.css'
const EachBook = ({ bookInfos }) => {
    const { title, authorInfo } = bookInfos
    return (
        <div className='book-container'>
            <div className='book'>
                <div className='img'>{title}</div>
            </div>
            <div className='bookInfo'>
                <div className='authorInfo'>
                    <p>A book by </p>
                    <p>{`${authorInfo.firstname} ${authorInfo.lastname}`}</p>
                </div>
            </div>
        </div>
    )
}
export const BookShelf = () => {
    return jData.map((i) => {
        return <EachBook key={i._id} bookInfos={i} />
    })
}
