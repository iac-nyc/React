import React, { Component }from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';



  
class App extends React.Component {
  state = {
    players: [
      {
        name: "Iftekhar Chowdhury",
          score: 100,
        id: 1
      },
      {
        name: "James Bond",
            score: 75,
        id: 2
      },
      {
        name: "McGyver",
            score: 95,
        id: 3
      }
    ]
  };
//Player Id Counter
prevPlayerId =3;

handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score+=delta
    }));
  }

handleAddPlayer = (name) =>{
    this.setState( prevState =>{
        return {
            
            players:[
            ...prevState.players,
            {
                name,
                score: 0,
                id: this.prevPlayerId +=1
                
            }
        ]
    }
    });
}
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index = {index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
        <AddPlayerForm  addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
