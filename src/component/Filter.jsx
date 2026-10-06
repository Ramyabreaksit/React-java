import React, { useState }from 'react';


function Filter() {
    const [users]=useState([
        {id:1,name:"Javeed",age:25},
        {id:2,name:"jason",age:24},
        {id:3,name:"Kumaran",age:18},
        {id:4,name:"Vinoth",age:17},
        {id:5,name:"Shreyes",age:23}
        
    ]);

    const filteredUsers=users.filter((user)=>user.age>20);
  return (
    <div>
        <h2>Age greater than 20</h2>
        <ul>
            {filteredUsers.map((user)=>(
                <li key={user.id}>
                    {user.name}-{user.age}
                </li>
            ))}

        </ul>
    </div>
  );
}

export default Filter;