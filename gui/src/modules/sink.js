import '../css/sink.module.css';

const Sink = () => {
    return (
        <>
            <div className="circle">
                <div className="loader-water">
                    <div id="water" className="water">

                        <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
                            <use xlinkHref="#wave"></use>
                        </svg>

                        <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
                            <use xlinkHref="#wave"></use>
                        </svg>

                    </div>



                    <svg viewBox="0 0 40 68" className="drop">
                        <use xlinkHref="#drop"></use>
                    </svg>

                    <svg viewBox="0 0 440 440" className="sink">
                        <use xlinkHref="#sink"></use>
                    </svg>

                    <svg viewBox="0 0 212 40" className="loading">
                        <use xlinkHref="#loading"></use>
                    </svg>

                </div>
            </div></>
    )
}

export default Sink;