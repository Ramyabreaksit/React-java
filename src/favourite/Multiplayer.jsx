import {useState} from 'react'

function Multiplayer() {
  
    
const [favourite,changeCricketer] = useState('');
  return(
    <>
    <h2>My favourite Cricketer is {favourite}</h2>

    <button styles={{backgroundcolor:'lightblue',cursor:'pointer',marginRight:'10px'}}
    onClick={()=> {changeCricketer('Virat Kholi')}}>Kholi</button>

    <button styles={{backgroundcolor:'lightblue',cursor:'pointer',marginRight:'10px'}}
    onClick={()=> {changeCricketer('KL Rahul')}}>Rahul</button>

    <button styles={{backgroundcolor:'lightblue',cursor:'pointer',marginRight:'10px'}}
    onClick={()=> {changeCricketer('Thilak Varma')}}>Varma</button>

    <button styles={{backgroundcolor:'lightblue',cursor:'pointer'}}
    onClick={()=> {changeCricketer('Rohit Sharma')}}>Sharma</button>
   </>
  );
}

export default Multiplayer;