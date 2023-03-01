import HumidityChart from "./pieChart";
import classes from '../css/humidity.module.css'


const Humidity = ()=>{
    return(
        <div className={classes['humidity-wrapper']}>
            <HumidityChart></HumidityChart>
        </div>
    )
}

export default Humidity;