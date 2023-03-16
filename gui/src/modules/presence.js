import classes from '../css/presence.module.css';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight, faPersonCircleXmark } from '@fortawesome/free-solid-svg-icons';


const Presence = (props) => {
    let [presence, setPresenceState ] = useState(false);

    let icon = presence ? faPersonWalkingArrowRight : faPersonCircleXmark;
    let actionClass = presence ? classes['icon-animation'] : classes['icon-static'];

    const setPresence = ()=>{
        setPresenceState((prev)=> !prev);
    }

    return (
        <div className={classes['presence-wrapper']}>
            <FontAwesomeIcon icon={icon} size="10x" className={actionClass} onClick={setPresence}/>
        </div>
    )
}

export default Presence;