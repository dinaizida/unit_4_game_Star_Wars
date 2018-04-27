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

function resetGame() {	
	
	$("#charactersSection").show();

	$(".restart").hide();
	$(".attackButton").show();

	// reset myChar and myDef to equal nothing.
	var myChar = "";
	var myDef = "";

	// delete all in-game text.
	$(".youAttacked").empty();
	$(".attackedBack").empty();
	$(".youDefeated").empty();
	$(".youWon").empty();
	$(".youLose").empty();
	$(".noEnemy").empty();

};

$("document").ready(function() {
    resetGame();

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
        $(".youDefeated").empty();

    });

        // when the user clicks attack, the player/Your Character's Health Points go down based on the counter attack 
        // property of the "Defender".Their counter attack decreases your health.
        $(".attackButton").click(function(){
            // if attacker clicks attack button when no enemy in the avalable to attack div
            if ($("#defender").children().length == 0) {
                $(".noEnemy").html("No enemy here.");
            }


    
            if (!(attackerHP < 1) || !(defenderHP < 1)) {
    
                // when button is clicked (if both players healthpoints are not 0, 
                // the game subtracks the defendersCAP from the attackers HP.)
                
                attackerHP = (attackerHP - defenderCAP);

                console.log("attacker HP: " +attackerHP);
                console.log("attacker AP: " +attackerAP);
                
                
                
                // writing the attacker/Your Character's new healthpoints to the html. 
              
                // writing the text You attacked ... for ... damage".
                $(".youAttacked").html("You attacked " + YourDefender + " for " + attackerAP + " damage.");
                $(".attackerHP").html("Your Health Points : " + attackerHP );
                // when button is clicked (if both players healthpoints are not 0, 
                // the game subtracks the attackers AP points from the defenders HP.)
                defenderHP = (defenderHP - attackerAP);
                console.log("defender HP: " +defenderHP);
                
                // writing the text ... attacked you back for ... damage."
                $(".attackedBack").html(YourDefender + " attacked you back for " + defenderCAP + " damage.");
                $(".defenderHP").html("Your Health Points : " + defenderHP );

                attackerAP += characters[key].attackPower +1 ;
                console.log('new attacker AP after added base AP : ' +attackerAP);
                
            }
            // if your character defeats the defender.
     		if (defenderHP <= 0) {
                

                // clear text from the bottom and add defeated text.
                $(".youAttacked").empty();
                $(".attackedBack").empty();
                $(".defenderHP").empty();
                $(".youDefeated").html("You have defeated " + YourDefender + ", you can choose to fight another enemy.");

                // remove defender from the page.
                $("#defender").empty();
                

            }

            // if all enemies have been defeated and the attacker still has health, then the player wins
     		// if ($(".move").children().length == 0 ){
                if (($(".move").children().length == 0 ) && (attackerHP > 0) && (defenderHP < 0)) {
                // clear out the other paragraphs and let user know they won.
                $(".youAttacked").empty();
                $(".attackedBack").empty();
                $(".youDefeated").empty();
                $(".noEnemy").empty();
                $(".youWon").html("You Won!!!! GAME OVER!!!"); 
  
                // show the restart button. 
                $(".restart").show();
  
                // When you click "Restart" the game begins again. 
                $(".restart").click(function(){
                    location.reload(true);
                });
                                 
               }
  
               // if your characters hp = 0 then you lose.
               if (attackerHP <= 0) {
  
                   // show the restart button.
                   $(".restart").show();
  
                   // hide the attack button.
                   $(".attackButton").hide();
  
                   // You lose.
                   $(".youAttacked").empty();
                    $(".attackedBack").empty();
                   $(".youDefeated").empty();
                   $("#selectedCharacter").empty();
                   $(".youLose").html("You've been defeated...GAME OVER!!!")
  
                    // When you click "Restart" the game begins again. 
                    $(".restart").click(function(){
                        location.reload(true);
                    });
  
               }      
    
        }); 
    
    


});