import './content.css'
import {BookShelf} from "../BookShelf/BookShelf.jsx"
export const Content = () => {
    return (
        <>
            <div className='content'>
                <div className='utility-bar'>
                    <div className='utilibty-buttons'>Sort</div>
                    <div className='utilibty-buttons'>Filter</div>
                    <div className='utilibty-buttons'>
                        <label className='utilibty-buttons' htmlFor='searchbar'>
                            Search books
                        </label>
                        <input
                            className='utilibty-buttons'
                            type='text'
                            id='searchbar'
                            placeholder='enter the book name'
                        />
                    </div>
                    <button className='utilibty-buttons'>Submit</button>
                </div>
                <div className='book-shelf'>
                    <BookShelf/>
                </div>
            </div>
        </>
    )
}
