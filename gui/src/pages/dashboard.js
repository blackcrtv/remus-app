
import classes from '../css/dashboard.module.css';
import ModulTermometru from '../modules/termometru';
import Humidity from '../modules/humidity';
import Presence from '../modules/presence';
import Gas from '../modules/gas';
import Event from '../modules/event';

import io from 'socket.io-client';

import { useEffect, useState } from 'react';

const socket = io('http://localhost:3000');

const Dashboard = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        setData({
            "temp": 26.3,
            "hum": 23,
            "pres": true,
            "gasRes": 2342,
            "event": "sink_on"
        })
        socket.on('message', (data) => {
            console.log(`Received message from server: ${data}`);
        });
        socket.emit('message', 'Connected');
    }, [])

    if (!data) {
        return (
            <iframe src='components/loading.html' className={classes['loading-wrapper']}></iframe>
        )
    }

    return (
        <div className={classes['dashboard-wrapper']}>
            <div className={classes['dashboard-thermometre']}>
                <ModulTermometru temp={data.temp}></ModulTermometru>
            </div>
            <div className={classes['dashboard-event']}>
                <Event event={data.event}></Event>
            </div>
            <div className={classes['dashboard-presence']}>
                <Presence pres={data.pres}></Presence>
            </div>
            <div className={classes['dashboard-humidity']}>
                <Humidity hum={data.hum}></Humidity>
            </div>
            <div className={classes['dashboard-gas']}>
                <Gas gas={data.gasRes}></Gas>
            </div>
        </div>
    )
}

export default Dashboard;