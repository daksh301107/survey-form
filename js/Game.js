class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      form = new Form()
      form.display();
    }
  }
  play(){
      form.hide() ;
      textSize(30);
      text("what is your Gender ",120,100) ;
      Player.getPlayerInfo();
      text( allPlayers[i].name+":",120,y);
        y=y+20;
        }
      }
