import classes from '../css/gas.module.css';

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}

const Gas = (props) => {
    return (
        <div className={classes['gas-wrapper']}>
            <label className={classes['gas-label']}>{kFormatter(props.gas)}</label>
        </div>
    )
}

export default Gas;

