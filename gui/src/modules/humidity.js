import classes from '../css/humidity.module.css';
import pieClass from '../css/piechart.module.css';


const Humidity = (props) => {
    return (
        <div className={classes['humidity-wrapper']}>
            {/* <div className={classes['three']}>
                <h1>Humidity</h1>
            </div> */}
            <div className={`${pieClass["pie"]} ${pieClass["animate"]} ${classes['pie-wrapper']}`} style={{ "--p": props.hum, "--c": "lightgreen" }}> {props.hum}%</div>
        </div>
    )
}

export default Humidity;