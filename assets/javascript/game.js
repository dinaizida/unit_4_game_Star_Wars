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

    //create a characters object that include an object for each character

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
    //display all characters on the top of the screen in the characters section
    for (var key in characters) {
        var charDiv = $("<div class='character' data-name='" + characters[key].name + "'>");
        var charName = $("<div class='character-name'>").text(characters[key].name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", characters[key].img);
        var charHealth = $("<div class='character-health'>").text(characters[key].healthPoints);
        charDiv.append(charName).append(charImage).append(charHealth);

        $("#charactersSection").append(charDiv);

    };
    // determine which character selected(when clicked on) and assign its properties to 
    //variables that will be using in the game calculation report in the fight section
    function attackerAssignProperties (){

        for (var key in characters){
            if (YourCharacter == characters[key].name){
                attackerHP = characters[key].healthPoints;
                attackerAP = characters[key].attackPower;
                attackerCAP = characters[key].counterAttackPower;
                characters[key].attack = "true";
            }
        }
    };
    // determine which character selected(when clicked on) and assign its properties to 
    //variables that will be using in the game calculation report in the fight section
    function defenderAssignProperties (){

        for (var key in characters){
            if (YourDefender == characters[key].name){
                defenderHP = characters[key].healthPoints;
                defenderAP = characters[key].attackPower;
                defenderCAP = characters[key].counterAttackPower;
                characters[key].attack = "true";
            }
        }
    };
    // select a character, move selected character to #available-to-attack div and hide current div with all characters
    $(document).on("click", ".character", function() {
    
        if (myChar == "") {
            $(this).appendTo("#selectedCharacter");
            myChar = $(this);
            YourCharacter = myChar.attr("data-name");
            myChar.removeClass("character").addClass("charAttacker");   
        }
        // determine which character selected(when clicked on) and assign its properties to 
        //variables that will be using in the game calculation report in the fight section
        attackerAssignProperties();

        // moves the three remaining characters to " available to attack" section .
        //displays three other characters inside of avalable to attack div

        for (var key in characters) {
            if (characters[key].attack === "false") {
                charDiv = $("<div class='move' data-name='" + characters[key].name + "'>");
                charName = $("<div class='character-name'>").text(characters[key].name);
                charImage = $("<img alt='image' class='character-image'>").attr("src", characters[key].img);
                charHealth = $("<div class='character-health'>").text(characters[key].healthPoints);
                charDiv.append(charName).append(charImage).append(charHealth);
                $("#availabletoattack").append(charDiv);
            };
        };

        // hide all characters on the top
        $("#charactersSection").hide();
        $("#CharTitle").hide();
        

    });
    //select defender and move him to defender div
    $(document).on("click", ".move", function() {
        
        $(this).appendTo("#defender");
        myDef = $(this);
        YourDefender = myDef.attr("data-name");
        myDef.removeClass("move").addClass("charDefender");
        // determine which character selected(when clicked on) and assign its properties to 
        //variables that will be using in the game calculation report in the fight section
        defenderAssignProperties();
    });

        // when the user clicks attack, the player/Your Character's Health Points go down based on the counter attack 
        // property of the "Defender".Their counter attack decreases your health.
        $(".attackButton").click(function(){

            // if player clicks attack button and no one is in the "defender" div, then 
            // game says "no enemy here".
            // if ($("#defender").children().length == 0) {
            //     $(".noEnemy").html("No enemy here.");
            // }
    
            if (!(attackerHP < 1) || !(defenderHP < 1)) {
    
                // when button is clicked (if both players healthpoints are not 0, 
                // the game subtracks the defendersCAP from the attackers HP.)
                attackerHP = (attackerHP - defenderCAP);
                
                // writing the attacker/Your Character's new healthpoints to the html. 
                $("." + YourCharacter).html(attackerHP);
    
                // writing the text "You attacked Luke Skywalker for 8 damage".
                $(".youAttacked").html("You attacked " + YourCharacter + " for " + attackerAP + " damage.");
    
                // when button is clicked (if both players healthpoints are not 0, 
                // the game subtracks the attackers AP points from the defenders HP.)
                defenderHP = (defenderHP - attackerAP);
    
                // writing the text "Luke Skywalker attacked you back for 10 damage."
                $(".attackedBack").html(YourCharacter + " attacked you back for " + defenderCAP + " damage.");
            
                // write the defender's new healthpoints to the html.
                $("." + YourDefender).html(defenderHP);
            }
    
        }); 
    
    


});