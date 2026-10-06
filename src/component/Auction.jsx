function Auction(props){
    const {teaminfo}=props
    const {nickname,name,team}=teaminfo

    const text=`hi I am a ${nickname}  ${name} from team india`;

    return (
        <h2>{text}</h2>
    )
    
}
export default Auction;