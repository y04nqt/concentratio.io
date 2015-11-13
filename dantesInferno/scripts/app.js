////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
//beginning of the Start Menu
function StartMenu(){
  this.title = "Chowed";
  this.mode = "easy",
  this.numOfPlayers = 1;
  this.background;
  this.start = false;
  // this.onStart = function() {
  //   // css in here
  //   $('body').css('background-color', 'red');
  //   this.start = false;
  // }
  this.toggleMenu = function() {
    if (this.start == false) {
      $('body').append('<div class="start-menu">').css('background-color', '#eff');
      $('.start-menu').append('<button id="hello_btn">');
      $('#hello_btn').html('hi');
      // update this.start
      this.start = true;
    } else {
      $('#hello_btn').css('background-color', '#cdd');
      $('.start-menu').remove();
    }
  }
}
//end of Start Menu
////////////////////////////////
//getAtkPwr function start
var getAtkPwr = function(min, max){
  return Math.floor(Math.random() *(max - min))+min;
}
//end of above
////////////////////////////////
//created Player constructor
function Player(){
    this.hp = 0;
    this.armourRating = 0;
    this.mana = 50;
    this.minAtk = 10;
    this.maxAtk = 50;
    this.atkPower = 0;
    this.weapon = 0;
    this.armour = 0;
    this.weaponPieces = [];
    this.armourPieces = [];
    this.noodles = 0;
    this.fruitJuice = 2;
}
//end of constructor
////////////////////////////////
//PlayerOne constructed
var PlayerOne = new Player();
PlayerOne.name = 'Player One';
PlayerOne.hp = 100;
PlayerOne.minAtk = 5;
PlayerOne.maxAtk = 15;
PlayerOne.atkPower = getAtkPwr(PlayerOne.minAtk, PlayerOne.maxAtk);
//end of construction
////////////////////////////////
//PlayerTwo constructed
var PlayerTwo = new Player();
PlayerTwo.hp = 101;
PlayerTwo.minAtk = 200;
PlayerTwo.maxAtk = 500;
PlayerTwo.atkPower = getAtkPwr(PlayerTwo.minAtk, PlayerTwo.maxAtk);
//end of construction
////////////////////////////////
//get a number between zero and one hundred
var getZeroToHundred = function(){
  return Math.floor(Math.random()*100);
}
//end of function
////////////////////////////////
//beginning of Creature constructor
function Creature(){
  this.hp = 25;
  this.atkPower = 0;
  this.minAtk = 2;
  this.maxAtk = 10;
  this.loot = ['common', 'rare'];
  this.lootDropCommon = ['Simple Spade', 'Pointy Barb', 'Sharp Sword', 'Mauling Mace' ];
  this.lootDropRare = 'Booming Boomstick';
  this.noodlesDrop = 1;
  this.manaDrop = getZeroToHundred();
  this.name = ['Terrifying Turtle', 'Gigantic Giraffe', 'Fiery Fox', 'Slithery Snake', 'Immutable Malamute', 'Spooky Skeleton', 'Spinny Spider'];

}
var creature = new Creature();
creature.atkPower = getAtkPwr(creature.minAtk, creature.maxAtk);
//end of Creature constructor
////////////////////////////////
//beginning of Boss constructor
function Boss(){
  this.hp = 125;
  this.atkPower = 10;
  this.minAtk = 3;
  this.maxAtk = 15;
  this.loot = 'Stupendous';
  this.lootDropArmour = ['Serendipitous Shroud of Splendor', 'Malformed Runic Tunic', 'Bastardized Boots of Bewilderment', 'Guilded Gloves of the Grave', 'Serrated Edge Spaulders', 'Leonidas Warring Leggaurds'];
  this.name = ['Guggenheim Gargatron', 'RizzRocket Sprocket Mechanair', 'Menacing Mastigoproctus', 'Grimey Goblin Gurkon', 'Heretic Hellwolf', 'The Droid I was looking for'];
  this.bossLives = 5;
}
var boss = new Boss();
//end of Boss construsctor
////////////////////////////////
//beginning of Level constructor
function Dungeon(){
  this.lairs = ['Circle of Lust', 'Circle of Gluttons', 'Circle of Heretics', 'Circle of Corruption', 'The Pit'];
  this.name = 'The Sacred Tomb';
  this.background;
  this.getLairs = function(lair){
    switch (lair) {
      case 1:
        return this.lairs[0];
        break;
      // case 2:
      //   return this.lairs[1];
      // case 3:
      //   return this.lairs[2];
      // case 4:
      //   return this.lairs[3];
      // case 5:
      //   return this.lairs[4];
      default:
        return 'shit';
        break;
    };
  }
  this.setLairTitle = function(lair){
    switch (lair) {
      case 1:

        var title = $('<h1>');
        $('.first-level').append(title);
        $(title).html(this.lairs[0]);

        $('.first-level').append('<button id="creatureBtn">').append('<button id="eatBtn">').append('<button id="bossBtn">').append('<button id="drinkBtn">');
        //for(i=0; i < Boss.bossLives -4; i++){
          $('#creatureBtn').on('click', function(){
            $('.first-level').append('<h2 id="bing">').append('<p class="creatureStats">').append('<h3 id="player">'+ PlayerOne.name).append('<p class="playerStats">'+PlayerOne.hp+' '+PlayerOne.atkPower).append('<button id="playerAttack">');

            $('#playerAttack').html('boom');
            $('#bing').html(creature.name[0]);

            $('#creatureBtn').remove();
            $('#bossBtn').remove();

            $('.creatureStats').html('Health: '+creature.hp+'<br/>'+' Attack Damage: '+creature.atkPower);

            $('#playerAttack').on('click', function(){
              if (creature.hp > 0) {
                $('.creatureStats').html()
                console.log(PlayerOne.hp -= creature.atkPower);
                console.log(creature.name[0]+' has hit '+PlayerOne.name+' for '+creature.atkPower);
                console.log(creature.hp -= PlayerOne.atkPower);
                console.log(PlayerOne.name+' has hit '+creature.name[0]+' for '+PlayerOne.atkPower);
                $('.playerStats').html('Health: '+PlayerOne.hp+'<br/>'+' Attack Damage: '+PlayerOne.atkPower);
                $('.creatureStats').html('Health: '+creature.hp+'<br/>'+' Attack Damage: '+creature.atkPower);
                if(creature.hp <= PlayerOne.minAtk){
                  alert('finish him.');
                }
              }else if(creature.hp <= 0){
                $('#playerAttack').remove();
                Boss.bossLives--;
                $('.first-level').append('<button id="bossBtn">').append('<button id="creatureBtn">');
              }
            });
          });
      //}
        break;
      // case 2:
      //   return this.lairs[1];
      // case 3:
      //   return this.lairs[2];
      // case 4:
      //   return this.lairs[3];
      // case 5:
      //   return this.lairs[4];
      default:
        return 'shit';
        break;
    };
  }
}
var theGrave = new Dungeon();
//end of Dungeon Constructor
////////////////////////////////




//theGrave.background = theGrave.lairs[0]; save for later





$(document).ready(function(){
  startMenu = new StartMenu();
  startMenu.toggleMenu();
  $('#hello_btn').click(function(){
    startMenu.toggleMenu();
    $('body').append('<div class="first-level">');
    theGrave.setLairTitle(1);
  });
});
