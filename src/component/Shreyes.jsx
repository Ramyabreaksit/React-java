function Shreyes(props){
    

    const {aboutShreyes}=props
    const {Cricketgame, francies}=aboutShreyes
    const text= `Hi I am Shreyes. I start my career from ${Cricketgame} in IPL I play for ${francies} `;
    return(
        
        <h2>{text}</h2>
    )
}
export default Shreyes;