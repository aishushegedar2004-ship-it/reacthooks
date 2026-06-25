import React, { useEffect, useState } from 'react'
import Greeting from './Greeting';

export default function App() {
  // let name = "Ash";
 const[name, setName] = useState("Ash");
 const[color, setColor] = useState("Black");
 const[count, setCount] = useState(0);

 useEffect(() => {
  setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000)
 });

  return (
    <div>
      <Greeting name={name}/>
      <button onClick={() => setName("Aish")}>Click for change</button>
      <h2>My fav color is {color}! </h2>
      <button onClick={() => setColor("Blue")}>Reavel color</button>
      <h2>The count is {count}!</h2>
      <button onClick={() => setCount(count)}>Time Countdown</button>
      <h1>The time start now {count} !</h1>
    </div>
  );
}