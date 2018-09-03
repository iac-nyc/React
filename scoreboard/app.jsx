var PLAYERS = [
  {
    name: "Iftekhar Chowdhury",
    score: 100,
    id: 1,
  },
  {
    name: "James Bond",
    score: 55,
    id: 2,
  },
  {
    name: "McGyver",
    score: 75,
    id: 3,
  }
];


function Header(props){
  return(
     <div className="header">
        <h1>{props.title}</h1>
      </div>
  
  );

}
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};
function Counter(props){
  return (
    <div className="counter">
       <button className="counter-action decrement"> - </button>
       <div className="counter-score"> {props.score} </div>
       <button className="counter-action increment"> + </button>
    </div>
  
  );
}

Counter.propTypes ={
  score: React.PropTypes.number.isRequired,

};
function Player(props){
  return(
     <div className="player">
           <div className="player-name">
                {props.name}
           </div>
            <div className="player-score">
              <Counter score = {props.score} />
              
           </div>     
        </div>
  
  );
}

Player.propTypes ={
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,

};
function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title}/>
    
      <div className="players">
    {props.players.map(function(player){
      return <Player name={player.name} score={player.score} key={player.id}/>
  
      })}
    
       
    
            
        </div>  
     </div>
      
  );
}
Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired,
 
};

Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));