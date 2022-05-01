
export const Button = ({startfn, status, stopfn, resumefn, resetfn}) => {
    
    return (
        <div className="main-section">
            <button className="stopwatch-btn stopwatch-btn-gre" onClick={() => {
                startfn();
            }}>Start</button>
            {(status === 0) ? 
                <button className="stopwatch-btn stopwatch-btn-red" onClick={() => {
                    stopfn();
                }}>Pause</button>
            
            :
                ""
            }
            {(status === 1) ? 
                <button className="stopwatch-btn stopwatch-btn-red" onClick={() => {
                    stopfn();
                }}>Pause</button>
            
            :
                ""
            }
            {(status === 2) ?
                <button className="stopwatch-btn stopwatch-btn-red" onClick={() => {
                    resumefn();
                }}>Resume</button>
            :
             ""
            }
            <button className="stopwatch-btn stopwatch-btn-yel" onClick={() => {

                resetfn();
            }}>Reset</button>
        </div>
    )
}