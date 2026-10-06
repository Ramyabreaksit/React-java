import Virat from "./Virat.jsx";
import Auction from "./Auction.jsx"
function Cricketer(){
    

    //const Viratinfo= {nickname:"Cheeku",team:"India"}
    
    //const Viratinfo={}

    //const showViratinfo= Viratinfo.nickname !== undefined && Viratinfo.team !== undefined ? 
         

    //const isduty=true;

    const teaminfo={nickname:"Cheeku", name:"Virat",team:"India"}
    const Cricketerinfo=[
        {nickname:"Sarpanch sabb",name:"Shreyes",team:"Punjab kings" },
        {nickname:"Thala",name:"Ms dhoni",team:"Chennai super kings"},
        {nickname:"Jaddu",name:"Jadeja",team:"Chennai super kings",}
        
    ];

    const numberList=[1,2,3,4,5,5,6,6,7]


    
    return(
        <div>
        
        {/*<Virat Viratinfo={Viratinfo}/>*/}

        {/*{
        showViratinfo ?<Virat Viratinfo={Viratinfo}/>:null
        }
    
        {isduty ? <h2>Cricketer duty is playing cricket</h2> :
        <h2>Cricket game is liked by every one</h2>} */}

        <Auction teaminfo={teaminfo}/>
        <ul>
            {Cricketerinfo.map((teaminfo)=>(<li><Auction teaminfo={teaminfo}/></li>))}
        </ul>
        <ul>
            {numberList.map((r,index)=> <p key={index}>{r}</p>)}
        </ul>
        </div>
    )
}
export default Cricketer;