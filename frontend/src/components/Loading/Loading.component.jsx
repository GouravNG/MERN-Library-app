import "./loading.css"
export function Loading() {
    return (
        <>
            <div className='card-box'>
                <div className='card'>
                    <div className='loaders delay1'></div>
                    <div className='loaders delay2'></div>
                    <div className='loaders delay3'></div>
                    <div className='loaders delay4'></div>
                </div>
            </div>
        </>
    )
}
export default Loading
