
import classes from '../css/dashboard.module.css';
import ModulTermometru from '../modules/termometru';
import Humidity from '../modules/humidity';
import Presence from '../modules/presence';
import Gas from '../modules/gas';
import Event from '../modules/event';

const Dashboard = () => {
    return (
        <div className={classes['dashboard-wrapper']}>
            <div className={classes['dashboard-thermometre']}>
                <ModulTermometru></ModulTermometru>
            </div>
            <div className={classes['dashboard-event']}>
                <Event></Event>
            </div>
            <div className={classes['dashboard-presence']}>
                <Presence></Presence>
            </div>
            <div className={classes['dashboard-humidity']}>
                <Humidity></Humidity>
            </div>
            <div className={classes['dashboard-gas']}>
                <Gas></Gas>
            </div>
        </div>
    )
}

export default Dashboard;