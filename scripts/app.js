//constructing the Gameboard object
function Gameboard(){
  //adding in properties because bosses do that
  this.title = "HexMatch";
  this.tileArray = ['a','a', 'b','b', 'c','c', 'd','d', 'e','e', 'f','f'];
  this.tileCount = this.tileArray.length;
  this.memoryTiles = [];
  this.memoryTilesIds =[];
  this.tileClicked = false;
  this.tilesOut = [];
  this.tilesFlipped = 0;
  //end of cool ass properties

  //fisher-yates shuffle algorithm
  this.tileArrayShuffle = function(){
    var currentIndex = this.tileArray.length, tempVal, randIndex;

    while( 0 < currentIndex){
      //create random index int
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -=1;

      tempVal = this.tileArray[currentIndex];
      this.tileArray[currentIndex] = this.tileArray[randIndex];
      this.tileArray[randIndex] = tempVal;
    }
    return this.tileArray;
  }
  //end shuffle
  //generate the tiles
  this.generateTiles = function(){
    gameBoard.tileArrayShuffle();
    for(i=0; i < gameBoard.tileArray.length; i++){
      $('#theBoard').append('<div id="tile_'+i+'" class="tiles" onclick="gameBoard.flipTiles(this,\''+gameBoard.tileArray[i]+'\')">'+gameBoard.tileArray[i]+'</div>');
    }
    $('body').append('<h1>');
  }
  //end generation
  this.flipTiles = function(tile, val){

      if($(tile).html = ' ' && gameBoard.memoryTiles.length < 2){
        //setting tile css with style objects
        var tileCSS ={
          'color' : 'white',
          'backgroundColor': 'rgba(0, 0, 0, 0.21)',

        }
        $(tile).css(tileCSS);
        //ending css change
        //if statement to grab the first value
        if(gameBoard.memoryTiles.length == 0){
          //this pushes the clicked value into two arrays
          gameBoard.memoryTiles.push(val);
          gameBoard.memoryTilesIds.push(tile.id);
          //ends the pushing
          //logging the push
          console.log(gameBoard.memoryTiles);
          console.log(gameBoard.memoryTilesIds);
          //end of logging
        }else if(gameBoard.memoryTiles.length == 1){
          gameBoard.memoryTiles.push(val);
          gameBoard.memoryTilesIds.push(tile.id);
          console.log(gameBoard.memoryTiles);
          console.log(gameBoard.memoryTilesIds);
          if(gameBoard.memoryTiles[0] == gameBoard.memoryTiles[1]){
            gameBoard.tilesFlipped += 2;
            gameBoard.tileClicked == true;
            gameBoard.tilesOut += gameBoard.memoryTiles;
            console.log(gameBoard.tilesFlipped);
            var secretScoreHolder = gameBoard.tilesFlipped;
            $('h1').html(secretScoreHolder);

            //gameBoard.memoryTiles = [];
            gameBoard.memoryTilesIds =[];
            var TileOne = gameBoard.memoryTiles[0];
            var TileTwo = gameBoard.memoryTiles[1];


            $(gameBoard.memoryTiles[0]).remove();
            $(gameBoard.memoryTiles[1]).remove();
            // if()
            if(gameBoard.tilesFlipped == gameBoard.tileArray.length){
              $('#theBoard').html('');
              alert('cleared board')
              var cnfm = confirm('Want to play again?');
              cnfm;
              if(cnfm === true){
                gameBoard.tilesFlipped = 0;
                $('h1').remove();
                gameBoard.generateTiles();
              }else if(cnfm === false){
                window.close();
              }else{
                alert('error');
              }
            }
          }else{
            var firstTile = gameBoard.memoryTilesIds[0];
            var secondTile = gameBoard.memoryTilesIds[1];

          }
          setTimeout(gameBoard.flipBack, 700);
        }

      }
      console.log(tile+' '+val);
  }
  this.flipBack = function(){
    var defaultStyle = {
      'color' : 'transparent',
      'backgroundColor': 'rgba(0, 0, 0, 0.71)',
      'opacity' : '1'
    }
    var firstTile = gameBoard.memoryTilesIds[0];
    var secondTile = gameBoard.memoryTilesIds[1];
    firstTile = '#'+firstTile;
    secondTile = '#'+secondTile;
    $(firstTile).css(defaultStyle);
    $(secondTile).css(defaultStyle);
    console.log('flipBack');
    console.log(firstTile);
    console.log(secondTile);
    gameBoard.memoryTiles = [];
    gameBoard.memoryTilesIds =[];
  }
}
var gameBoard = new Gameboard();


$(document).ready(function(){
  $('body').append('<div id="theBoard">');
  gameBoard.generateTiles();
  console.log(gameBoard.tileCount);
})


// var Card = function() {
//
// 	this.tileDiv = $('div').prop('id');
// 	this.isFlipped = false;
//
// 	var base = this;
// 	$(this.el).on('click', function(tile, val) {
// 		base.toggle();
// 	});
//
// 	this.toggle = function() {
// 		$(base.el).css()
// 	}
//
// 	this.initialize = function() {
// 		$('#theBoard').append(base.tileDiv);
// 	}
//   this.render = function(){
//
//   }
// 	this.initialize();
//
// }
