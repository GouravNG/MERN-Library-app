import jData from '../../dummyData/getAllBook.json'
import "./bookShelf.css"
export const BookShelf = () => {
    return jData.map((i) => {
        return <div key={i} className="each-book">Test</div>
    })
}
