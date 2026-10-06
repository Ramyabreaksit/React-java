import { useState } from 'react';

function Favouritecricketer() {
    //let favourite='Shreyes iyer';
    const[favourite,changeCricketer]=useState('Shreyes iyer');

  return (
    <>
    <h2>My Favouritecricketer is {favourite}</h2>
    <button onClick={()=> {changeCricketer('MS dhoni')}}>Change Cricketer</button>
    </>
  );
}


export default Favouritecricketer;