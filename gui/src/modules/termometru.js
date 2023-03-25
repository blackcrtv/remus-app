import Thermometer from 'react-thermometer-component';
import classes from '../css/thermo.module.css'

const ModulTermometru = (props) => {
    return (
        <div className={classes['thermo-wrapper']}>
            <Thermometer
                theme="light"
                value={props.temp}
                max="100"
                steps="3"
                format="°C"
                size="large"
                height="300"
            />
            <label className={classes['thermo-label']}>{props.temp}°C</label>
        </div>
    )
}

export default ModulTermometru;