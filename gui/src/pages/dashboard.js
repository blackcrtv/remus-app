
import classes from '../css/dashboard.module.css';
import ModulTermometru from '../modules/termometru';
import Humidity from '../modules/humidity';


const Dashboard = () => {
    return (
        <div className={classes['dashboard-wrapper']}>
            <div className={classes['dashboard-thermometre']}>
                <ModulTermometru></ModulTermometru>
            </div>
            <div className={classes['dashboard-event']}>Event</div>
            <div>Presence</div>
            <div className={classes['dashboard-thermometre']}>
                <Humidity></Humidity>
            </div>
            <div>Gas</div>
        </div>
    )
}

export default Dashboard;