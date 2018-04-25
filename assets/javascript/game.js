$("document").ready(function() {

    //global variables
    var currSelectedCharacter;
    var currentDefender;
    var combatants = [];
    var indexofSelChar;
    var attackResult;
    var turnCounter = 1;
    var killCount = 0;

    //character objects

var characters = {
    'kenobi' : {
        name : "Kenobi",
        img : "assets/images/player.png",
        health : 120,
        attackPlayer : 9,
        attackEnemi : 16
    },
    'skywalker' : {
        name : "Skywalker",
        img : "assets/images/player.png",
        health : 100,
        attackPlayer : 15,
        attackEnemi : 6
    },
    'sideuous' : {
        name : "Sideuous",
        img : "assets/images/player.png",
        health : 150,
        attackPlayer : 9,
        attackEnemi : 20
    },
    'maul' : {
        name : "Maul",
        img : "assets/images/player.png",
        health : 180,
        attackPlayer : 8,
        attackEnemi : 20
    }
};


});