import { useState } from "react"
import {genNums,sum} from "./helper"
import './Lottery.css'

export default function Lottery(){
   const [num,setNum]=useState(genNums(3));
   const isWinning=sum(num)===15;
    function getLottery(){
        setNum(genNums(3));
    }
 
    return(
    <>
        <p>Ticket Number</p>
        <div className="ticket">
            <span>{num[0]}</span>
            <span>{num[1]}</span>
            <span>{num[2]}</span>
        </div>
        <button onClick={getLottery}>Buy Ticket</button>
        {isWinning && <h2>Congratulations, you won!</h2>}
        

    </>
       
    );
}