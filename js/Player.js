class Player {
  constructor(){
    this.index= null;
    this.name=null;

  }

  

  update(name){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
        
    });
    
  }
  static getPlayerInfo(){
    var listen=database.ref("players");
   listen.on("value",(data)=>{
     allPlayers=data.val();
   
   })
  }
}
