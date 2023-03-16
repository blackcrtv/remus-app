// import HumidityChart from "./pieChart";
import classes from '../css/humidity.module.css';
import pieClass from '../css/piechart.module.css';


const Humidity = ()=>{
    let value = 100;
    return(
        <div className={classes['humidity-wrapper']}>
            {/* <HumidityChart></HumidityChart> */}
            <div className={`${pieClass["pie"]} ${pieClass["animate"]} ${classes['pie-wrapper']}`} style={{"--p" :value , "--c":"lightgreen"}}> {value}%</div>
        </div>
    )
}

export default Humidity;