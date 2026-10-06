function Virat(props){
    const{Viratinfo}=props
    const{nickname, team}=Viratinfo

    const text=`HI I am ${nickname} Virat kholi. I play for ${team}`;

    return(
        <h2>{text}</h2>
    )
}

export default Virat;