
function Header(props){
    return (
        <header>
        <h1>{ props.title }</h1>
        <span className="stats">Players:{props.totalPlayers}</span>
        </header>   
    );
}
const Player = (props) =>{
    return (
       
        <div className="player">
           <span className="player-name">
            <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
              {props.name}
           </span> 
         <Counter />
        </div>
        
       
    );
}
class Counter extends React.Component{
    
//    constructor(){
//        super()
//        this.state = {
//            score: 0
//        
//        };    
//    }
    state={score: 0}; // same as constructor

incrementScore = () =>{

  this.setState( previousState => ({
     score: previousState.score + 1

  }));

}
decrementScore = () =>{
   this.setState( previousState => ({
        score: previousState.score - 1
    
  }));
}
   


render(){
           return (
         <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}>+</button>
               
          </div>
        );
    }
 
}

class App extends React.Component {
    
    state ={
        players: [
            {"name": "Iftekhar Chowdhury",
       
             "id":1
            },
            {
            "name":"James Bond",
           
             "id":2
            },
            {
            "name": "McGyver",
         
            "id":3
            }
    
    ]
};
    
handleRemovePlayer = (id) =>{
    this.setState ( previousState =>{
        return {
            players: previousState.players.filter( player => player.id !== id)
        };
    });

}
    
    render (){
          return (
        <div className="scoreboard">
        <Header title="Scoreboard"  totalPlayers=  {this.state.players.length }/>
        
        {/* Players list */}
              
        
        {this.state.players.map( player =>
         <Player 
            name={player.name} 
            id = {player.id}  
            key = {player.id.toString()}
            removePlayer = {this.handleRemovePlayer}
        />
    
    )}
       
       
        </div>
    
    );
    
    }
  

}
ReactDOM.render( 
    <App />,
    document.getElementById('root')
);





