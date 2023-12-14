
import Data from "../data/data.json"

function Exercise2() {

    return (
        <div className='container pt-6'>
        <div className='row'>
        {Data.map((item,i) => (
            <div>
            <div>{item.title}</div>
            <div>{item.content}</div>
            </div>
        ))}
    </div>
    </div>)
}

export default Exercise2;
