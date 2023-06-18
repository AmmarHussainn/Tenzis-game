import React, { useState } from 'react'

const Timer = ({hoursMinSecs}) => {
  const {  minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[mins,secs],setTime] = useState([minutes,seconds]);
 const [rest,setReset] = useState(false)
// const reset = () => setTime([ parseInt(minutes), parseInt(seconds)]);
  const tick = () => {
   
    if ( mins === 0 && secs === 0) {
    
      setReset (oldState =>{
        if ( mins  && secs === 0) {
        return   !oldState
   
        }
      })
      

    }
   else if (secs === 0) {
        setTime([ mins - 1, 59]);
    } else {
        setTime([ mins, secs - 1]);
    }
   
    
};

console.log(rest)




React.useEffect(() => {
  
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
   
});

 

  return (
    <div>
   
   { rest ? "You Lose the Game" : <p>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
   }
</div>
  )
}

export default Timer