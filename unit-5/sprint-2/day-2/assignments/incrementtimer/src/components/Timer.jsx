
import { useState, useEffect } from "react";

export const Timer = ({start, end, ShowFn}) =>{
    const [Timer, setTimer] = useState(start);

    useEffect(() =>{
        let id = setInterval(() =>{
            setTimer((preValue) =>{
                if(preValue === end){
                    clearInterval(id);
                    ShowFn(false);
                    return 100;
                }
                return preValue + 1;
            })
        },1000)

        return function cleanup(){
            console.log("Cleanup Function")
            clearInterval(id);
        }
    },[])

    return (
        <div>
            <p>Timer Start : {start} - Timer End : {end}</p>
            <h2>Timer : {Timer}</h2>
        </div>
    )
}