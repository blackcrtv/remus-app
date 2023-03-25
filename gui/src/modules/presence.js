import classes from '../css/presence.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight, faPersonCircleXmark } from '@fortawesome/free-solid-svg-icons';


const Presence = (props) => {

    let icon = props.pres ? faPersonWalkingArrowRight : faPersonCircleXmark;
    let actionClass = props.pres ? classes['icon-animation'] : classes['icon-static'];


    return (
        <div className={classes['presence-wrapper']}>
            <FontAwesomeIcon icon={icon} size="10x" className={actionClass} />
        </div>
    )
}

export default Presence;