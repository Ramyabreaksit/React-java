import React, { useState }from 'react';

function SearchFilter() {
    const [search, setSearch]=useState("");
    const users=["Tilak","Shreyes","Virat","Dhoni","Rohit","Ruturaj","Sooriyavanshi","Jaishwalgit status"];

    const filteredUsers=users.filter((user)=>
    user.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div>
        <input
            type="text"
            placeholder="Search user"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            //onChange is an event that fires whenever the value of the input changes.
            //e is the event object that contains information about the event.
            //e.target is the element that fired the event,and
            //e.target.value is the current value of  the input field.
            />
            <ul>
                {filteredUsers.map((user,index)=>(
                    <li key={index}>{user}</li>
                ))}
            </ul>
    </div>
  );
}

export default SearchFilter;