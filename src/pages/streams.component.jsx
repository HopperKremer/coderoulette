import {STREAM_LIST} from '../redux/streams.data'
//TODO: Add option to filter streams that have spots open
//FIXME:LKJKJ
const Streams = () => {
    console.log(STREAM_LIST[1].projectName)
    return (
        <div>
            {STREAM_LIST.map(stream =>{
                return <div className="card" > {stream.projectName}  </div>
            })}
        </div>
    );
}
 
export default Streams;