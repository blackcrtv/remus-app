
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

    const handleClientData = (data) => {
        if (data)
            setData(data)
    };

    useEffect(() => {
        setData({
            "temp": 26.3,
            "hum": 23,
            "pres": false,
            "gasRes": 2342,
            "event": "no"
        })
        socket.on('clientData', handleClientData);
        return () => {
            socket.off('clientData', handleClientData);
        }
    }, [])

    if (!data) {
        return (
            <iframe src='components/loading.html' className={classes['loading-wrapper']}></iframe>
        )
    }

    return (
        <div className={classes['dashboard-wrapper']}>
            <div className={classes['dashboard-thermometre']}>

                <div className={classes['eight']}>
                    <h1>Thermometer</h1>
                </div>
                <ModulTermometru temp={data.temp}></ModulTermometru>
            </div>
            <div className={classes['dashboard-event']}>

                <div className={classes['eight']}>
                    <h1>Event</h1>
                </div>
                <Event event={data.event}></Event>
            </div>
            <div className={classes['dashboard-presence']}>

                <div className={classes['eight']}>
                    <h1>Presence</h1>
                </div>
                <Presence pres={data.pres}></Presence>
            </div>
            <div className={classes['dashboard-humidity']}>
                <div className={classes['eight']}>
                    <h1>Humidity</h1>
                </div>
                <Humidity hum={data.hum}></Humidity>
            </div>
            <div className={classes['dashboard-gas']}>
                <div className={classes['eight']}>
                    <h1>Gas</h1>
                </div>
                <Gas gas={data.gasRes}></Gas>
            </div>
        </div>
    )
}

export default Dashboard;