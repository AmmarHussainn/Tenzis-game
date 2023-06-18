
import { useEffect, useState } from 'react';
import './App.css';
import Tenzins from './Components/Tenzins/Tenzins';
import { nanoid } from 'nanoid';
import Confetti from "react-confetti"
import Timer from './Components/TIimer/Timer';

function App() {
  const [dice,setDice] = useState(allNewDice())
  const [tenzeisStatus,setTenziesStatues] = useState(false)

   const [gameOver,setGameOver] = useState(false)

  useEffect(()=>{
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
   
    if (allHeld && allSameValue) {
      setTenziesStatues(true)
      console.log("you won the game")
    }
  },[dice])

 

  function generateNewDie() {
    return{
     value :Math.ceil(Math.random()*6),
     isHeld : false,
     id : nanoid()
  }
  }
 function allNewDice() {
   const newDice =[]
   for (let i = 0; i < 10; i++) {
newDice.push(generateNewDie())

    
   }
   return newDice
 }
 
const holdDice = (id)=>{
   setDice(oldDice =>oldDice.map((die)=>{
    return die.id === id ? {...die, isHeld : !die.isHeld} : die
   }))
}
 const DiceElements = (dice.map((die)=>{
  return(
    <Tenzins value ={die.value} holdDice={()=>holdDice(die.id)} isHeld={die.isHeld} key={die.id}/>
  )
 }))
  const rollDice = ()=>{
    if (!tenzeisStatus) {
      setDice(oldDice => oldDice.map(die =>{
        return die.isHeld ?die  : generateNewDie()
      }))
    }
    else {
      setTenziesStatues(false)
      setDice(allNewDice())
    }
  
  }
  console.log(gameOver)

  const hoursMinSecs = { minutes: 1, seconds: 0}
   if (hoursMinSecs.minutes === 0 && hoursMinSecs.seconds === 0) {
    console.log(hoursMinSecs.minutes)
    setGameOver(PrevVal => !PrevVal)
    console.log("You lost the game")
   
  }
  
  const updateMe = (hoursMinSecs) =>{
       if (hoursMinSecs ) {
        
       }
  }
  return (
   <main >
   {tenzeisStatus && <Confetti/>}
   <h1 className="title">Tenzies</h1>
   <p className="instructions">complete the game before the timer ends </p>
   <Timer hoursMinSecs={hoursMinSecs}  onChange = {updateMe}/> 
           {tenzeisStatus  ? <p className="instructions">Congratulations You Won the Game </p>: <p className="instructions">Roll until all dice are the same.
           Click each die to freeze it at its current value between rolls. </p>}
   <div className='dice-container'>
   {gameOver ?  <p>yOU LOSE THE Game</p> : DiceElements}
   </div>
  <button className='roll-dice' onClick={rollDice}>{tenzeisStatus ? "New Game" : "Roll Dice"}</button>
   </main>
  );
}

export default App;
