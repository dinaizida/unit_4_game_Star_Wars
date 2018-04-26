 // global variables.
 var attack;
 var defend;
 var attackcharacter;
 var attackerHP;
 var attackerAP;
 var attackerCAP;
 var defendcharacter;
 var defenderHP;
 var defenderAP;
 var defenderCAP;
 var name;
 var yourAttacker;
 var YourDefender;
 var myChar = "";
 var myDef = "";
 
 

$("document").ready(function() {

   
    //character objects

var characters = {
    'kenobi' : {
        name : "Obi-Wan Kenobi",
        img : "assets/images/player.png",
        healthPoints : 120,
        attackPower : 9,
        counterAttackPower : 16
    },
    'skywalker' : {
        name : "Luke Skywalker",
        img : "assets/images/player.png",
        healthPoints : 100,
        attackPower : 15,
        counterAttackPower : 6
    },
    'sideuous' : {
        name : "Darth Sideuous",
        img : "assets/images/player.png",
        healthPoints : 150,
        attackPower : 9,
        counterAttackPower : 20
    },
    'maul' : {
        name : "Darth Maul",
        img : "assets/images/player.png",
        healthPoints : 180,
        attackPower : 8,
        counterAttackPower : 20
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

// select a character, move selected character to another div and hide current div with all characters
$(".character").click(function(){          
    if (myChar == "") {      
    $(this).appendTo("#selectedCharacter");
    myChar = $(this);
    yourAttacker = $(myChar).attr("value");
    
    
       }
    // determine which character selected(clicked on) and assign its properties to variables 
    if (yourAttacker == characters.kenobi.name) {
            attackerHP = characters.kenobi.healthPoints;
            attackerAP = characters.kenobi.attackPower;
            attackerCAP = characters.kenobi.counterAttackPower;
            attack = characters.kenobi;

    }
    else if (yourAttacker == characters.skywalker.name){
            attackerHP = characters.skywalker.healthPoints;
            attackerAP = characters.skywalker.attackPower;
            attackerCAP = characters.skywalker.counterAttackPower;
            attack = characters.skywalker;
    }
    else if (yourAttacker == characters.sideuous.name){
            attackerHP = characters.sideuous.healthPoints;
            attackerAP = characters.sideuous.attackPower;
            attackerCAP = characters.sideuous.counterAttackPower;
            attack = characters.sideuous;
    }
    else if (yourAttacker == characters.maul.name){
            attackerHP = characters.maul.healthPoints;
            attackerAP = characters.maul.attackPower;
            attackerCAP = characters.maul.counterAttackPower;
            attack = characters.maul;
    }

  // output the three remaining characters to "Enemies available to attack" three separate divs.
  for (var i = 0; i < 4; i++) {
    $("._" + [i]).not(myChar).appendTo("#enemies" + [i]);

    // changing color
    $("._" + [i]).not(myChar).css({"background-color": "red", "outline-color": "black", 
        "border-width": "3px", "outline-style": "solid", "border-color": "black", "outline-width": "1px"});


}

    // hide all characters on the top
    $("#charactersSection").hide();  
});
});