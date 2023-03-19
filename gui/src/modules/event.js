import classes from '../css/event.module.css';

const Event = (props)=>{
    return(<>
        {/* <img src='/components/fridge.gif' alt="loading..." width="600" height="500"/> */}
        <iframe src='components/coffe-mug.html' className={classes['sink-event']}></iframe> 
        {/* <iframe src='components/sink.html' className={classes['sink-event']}></iframe>  */}
        {/* <iframe src='components/coffe.html' className={classes['coffe-event']}></iframe>  */}
    </>
    )
}

export default Event;