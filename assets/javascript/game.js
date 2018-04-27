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
var YourCharacter;
var YourDefender;
var myChar = "";
var myDef = "";

$("document").ready(function() {

    //character objects

    var characters = {
        'kenobi': {
            name: "Obi-Wan Kenobi",
            img: "assets/images/player.png",
            healthPoints: 120,
            attackPower: 9,
            counterAttackPower: 16,
            attack: "false"

        },
        'skywalker': {
            name: "Luke Skywalker",
            img: "assets/images/player.png",
            healthPoints: 100,
            attackPower: 15,
            counterAttackPower: 6,
            attack: "false"

        },
        'sideuous': {
            name: "Darth Sideuous",
            img: "assets/images/player.png",
            healthPoints: 150,
            attackPower: 9,
            counterAttackPower: 20,
            attack: "false"

        },
        'maul': {
            name: "Darth Maul",
            img: "assets/images/player.png",
            healthPoints: 180,
            attackPower: 8,
            counterAttackPower: 20,
            attack: "false"

        }
    };
    //display all characters on the top of the screen
    for (var key in characters) {
        var charDiv = $("<div class='character' data-name='" + characters[key].name + "'>");
        var charName = $("<div class='character-name'>").text(characters[key].name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", characters[key].img);
        var charHealth = $("<div class='character-health'>").text(characters[key].healthPoints);
        charDiv.append(charName).append(charImage).append(charHealth);

        $("#charactersSection").append(charDiv);

    };

    // select a character, move selected character to #available-to-attack div and hide current div with all characters
    $(".character").click(function() {
        if (myChar == "") {
            $(this).appendTo("#selectedCharacter");
            myChar = $(this);
            YourCharacter = myChar.attr("data-name");
            myChar.removeClass("character").addClass("charAttacker");   
            
        }
        // determine which character selected(clicked on) and assign its properties to variables 
        if (YourCharacter == characters.kenobi.name) {
            attackerHP = characters.kenobi.healthPoints;
            attackerAP = characters.kenobi.attackPower;
            attackerCAP = characters.kenobi.counterAttackPower;
            characters.kenobi.attack = "true";

        } else if (YourCharacter == characters.skywalker.name) {
            attackerHP = characters.skywalker.healthPoints;
            attackerAP = characters.skywalker.attackPower;
            attackerCAP = characters.skywalker.counterAttackPower;
            characters.skywalker.attack = "true";

        } else if (YourCharacter == characters.sideuous.name) {
            attackerHP = characters.sideuous.healthPoints;
            attackerAP = characters.sideuous.attackPower;
            attackerCAP = characters.sideuous.counterAttackPower;
            characters.sideuous.attack = "true";

        } else if (YourCharacter == characters.maul.name) {
            attackerHP = characters.maul.healthPoints;
            attackerAP = characters.maul.attackPower;
            attackerCAP = characters.maul.counterAttackPower;
            characters.maul.attack = "true";

        }

 // clones the three remaining characters to "Enemies available to attack" three separate divs.
        // // //display three other characters inside of avalable to attack div

        for (var key in characters) {
            if (characters[key].attack === "false") {
                charDiv = $("<div class='move' data-name='" + characters[key].name + "'>");
                charName = $("<div class='character-name'>").text(characters[key].name);
                charImage = $("<img alt='image' class='character-image'>").attr("src", characters[key].img);
                charHealth = $("<div class='character-health'>").text(characters[key].healthPoints);
                charDiv.append(charName).append(charImage).append(charHealth);
                $("#availableTOattack").append(charDiv);
            };
        };

        // hide all characters on the top
        $("#charactersSection").hide();
        debugger;

    });

    // click on any of the characters in the " available to attack" section, the clicked char moves to Defender section
    // the other char remins in the current section
    $(".move").click(function() {
        if (myDef = ""){
        $(this).appendTo("#defender");
        myDef = $(this);
        YourDefender = $myDef.attr("data-name");
        myDef.removeClass("move").addClass("charDefender");

        console.log(this);
        alert("test this");
        // $(".youDefeated").empty();
        }

        //determine who is currently "Defender" and assign
        // that person to the character array's properties.

        if (YourDefender == characters.kenobi.name) {
            attackerHP = characters.kenobi.healthPoints;
            attackerAP = characters.kenobi.attackPower;
            attackerCAP = characters.kenobi.counterAttackPower;
            characters.kenobi.attack = "true";

        } else if (YourDefender == characters.skywalker.name) {
            attackerHP = characters.skywalker.healthPoints;
            attackerAP = characters.skywalker.attackPower;
            attackerCAP = characters.skywalker.counterAttackPower;
            characters.skywalker.attack = "true";

        } else if (YourDefender == characters.sideuous.name) {
            attackerHP = characters.sideuous.healthPoints;
            attackerAP = characters.sideuous.attackPower;
            attackerCAP = characters.sideuous.counterAttackPower;
            characters.sideuous.attack = "true";

        } else if (YourDefender == characters.maul.name) {
            attackerHP = characters.maul.healthPoints;
            attackerAP = characters.maul.attackPower;
            attackerCAP = characters.maul.counterAttackPower;
            characters.maul.attack = "true";

        }

    });

   



});