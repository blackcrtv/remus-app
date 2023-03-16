import classes from '../css/gas.module.css';

const Gas = (props) => {
    return (
        <div className={classes['gas-wrapper']}>
            <label className={classes['gas-label']}>Value</label>
        </div>
    )
}

export default Gas;