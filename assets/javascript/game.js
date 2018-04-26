 // global variables.

 var myChar = "";
 var myDef = "";
 var yourAttacker;
 var attackerHP;
 var attackerAP;
 var attackerCAP;
 
 

$("document").ready(function() {

   
    //character objects

var characters = {
    'kenobi' : {
        name : "Obi-Wan Kenobi",
        img : "assets/images/player.png",
        healthPoints : 120,
        attackPower : 9,
        counterAttackPower : 16,
        attack : "false"
        
    },
    'skywalker' : {
        name : "Luke Skywalker",
        img : "assets/images/player.png",
        healthPoints : 100,
        attackPower : 15,
        counterAttackPower : 6,
        attack : "false"
        
        
    },
    'sideuous' : {
        name : "Darth Sideuous",
        img : "assets/images/player.png",
        healthPoints : 150,
        attackPower : 9,
        counterAttackPower : 20,
        attack : "false"
        
        
    },
    'maul' : {
        name : "Darth Maul",
        img : "assets/images/player.png",
        healthPoints : 180,
        attackPower : 8,
        counterAttackPower : 20,
        attack : "false"
        
        
    }
};
//display all characters on the top of the screen
for ( var key in characters){
   var charDiv = $("<div class='character' data-name='" + characters[key].name + "'>");
    var charName = $("<div class='character-name'>").text(characters[key].name);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", characters[key].img);
    var charHealth = $("<div class='character-health'>").text(characters[key].healthPoints);
    charDiv.append(charName).append(charImage).append(charHealth);

    $("#charactersSection").append(charDiv);

};

// select a character, move selected character to #available-to-attack div and hide current div with all characters
$(".character").click(function(){          
    if (myChar == "") {      
    $(this).appendTo("#selectedCharacter");
    myChar = $(this);
    yourAttacker = myChar.attr("data-name");
    console.log(this);
    console.log(yourAttacker);
       }
    // determine which character selected(clicked on) and assign its properties to variables 
    if (yourAttacker == characters.kenobi.name) {
            attackerHP = characters.kenobi.healthPoints;
            attackerAP = characters.kenobi.attackPower;
            attackerCAP = characters.kenobi.counterAttackPower;
            characters.kenobi.attack = "true";
           
    }
    else if (yourAttacker == characters.skywalker.name){
            attackerHP = characters.skywalker.healthPoints;
            attackerAP = characters.skywalker.attackPower;
            attackerCAP = characters.skywalker.counterAttackPower;
            characters.skywalker.attack = "true";
            
    }
    else if (yourAttacker == characters.sideuous.name){
            attackerHP = characters.sideuous.healthPoints;
            attackerAP = characters.sideuous.attackPower;
            attackerCAP = characters.sideuous.counterAttackPower;
            characters.sideuous.attack = "true";
            
    }
    else if (yourAttacker == characters.maul.name){
            attackerHP = characters.maul.healthPoints;
            attackerAP = characters.maul.attackPower;
            attackerCAP = characters.maul.counterAttackPower;
            characters.maul.attack = "true";
            
    }

    
    for ( var key in characters){

        if (characters[key].attack === "false"){

        var charDivAt = $("<div class='character' data-name='" + characters[key].name + "'>");
        var charNameAt = $("<div class='character-name'>").text(characters[key].name);
        var charImageAt = $("<img alt='image' class='character-image'>").attr("src", characters[key].img);
        var charHealthAt = $("<div class='character-health'>").text(characters[key].healthPoints);
        charDivAt.append(charNameAt).append(charImageAt).append(charHealthAt);
          
         $("#availableTOattack").append(charDivAt);
        };
     
     };


    // hide all characters on the top
    $("#charactersSection").hide();
     
});
});