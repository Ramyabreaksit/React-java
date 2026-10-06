import React, { useState }from 'react';

function SortFilter() {
    const[names,setNames]=useState([
        "Tilak",
        "Shreyes",
        "Virat",
        "Dhoni",
        "Rohit",
        "Ruturaj",
        "Jadeja"
        
    ]);

    const sortNames=()=>{
        const sorted=[...names].sort();
        setNames(sorted);
    };
  return (
    <div>
        <button onClick={sortNames}sort names></button>
        <ul>
            {names.map((name,index)=>(
                <li key={index}>{name}</li>
            ))
            }
        </ul>
    </div>
  );
}

export default SortFilter;