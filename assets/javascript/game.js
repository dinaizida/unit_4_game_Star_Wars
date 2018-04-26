$("document").ready(function() {

    //global variables
    





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

for ( var key in characters){

   var charDiv = $("<div class='character' data-name='" + characters[key].name + "'>");
    var charName = $("<div class='character-name'>").text(characters[key].name);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", characters[key].img);
    var charHealth = $("<div class='character-health'>").text(characters[key].health);
    charDiv.append(charName).append(charImage).append(charHealth);

    $("#charactersSection").append(charDiv);

};
});