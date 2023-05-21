import classes from '../css/event.module.css';

const Event = (props) => {
    if (props.event === 'sink_on') {
        return (
            <iframe src='components/sink.html' className={classes['sink-event']}></iframe>
        )
    }
    if (props.event === 'refrigerator') {
        return (
            <img src='/components/fridge.gif' alt="loading..." width="100%" height="80%" />
        )
    }
    if (props.event === 'coffee_cup') {
        return (
            <iframe src='components/coffe.html' className={classes['coffe-event']}></iframe>
        )
    }
    return (<>
        <iframe src='components/no-event.html' className={classes['sink-event']}></iframe>
    </>
    )
}

export default Event;