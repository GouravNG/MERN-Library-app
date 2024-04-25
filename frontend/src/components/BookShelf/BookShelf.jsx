/* eslint-disable react/prop-types */
import './bookShelf.css'
import { useGetAllBooks } from '../../hooks/useGetAllBooks.mjs'
import { Loading } from '../../components/Loading/Loading.component'
import { useEffect, useState } from 'react'
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
    const { isloading, isEmpty, getAllBooks } = useGetAllBooks()
    const [allBook, setAllBooks] = useState([])
    useEffect(() => {
        async function setTheBookData() {
            const data = await getAllBooks()
            setAllBooks(data)
        }
        setTheBookData()
    }, [])
    return allBook.map((i) => {
        return isloading ? <Loading /> : isEmpty ? <h1>No books found</h1> : <EachBook key={i._id} bookInfos={i} />
    })
}
