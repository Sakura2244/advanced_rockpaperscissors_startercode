//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION
$(document).ready(function(){
        
        $("input").keyup(function(event){
                if (event.keyCode === 13){
                        $("button").click();
                }
        });
        
        $("button").click(function(){ 
                var userChoice=$("input").val().toLowerCase();
                var choices=["rock", "paper", "scissor"];
                if (userChoice === choices[0]){
                        $("#userChoice").html('<img src= "images/rock.png"/>');
                }else if (userChoice === choices[1]){
                        $("#userChoice").html('<img src= "images/paper.png"/>');
                }else if (userChoice === choices[2]){
                        $("#userChoice").html('<img src= "images/scissor.png"/>');
                }else{
                        $("#userChoice").html("Choose rock, paper, or scissor");
                }
                
                var computerChoice = [
                        '<img src="images/rock.png"/>',
                        '<img src="images/paper.png"/>',
                        '<img src="images/scissor.png"/>'
                ];
                if(choices.includes(userChoice)){
                        var x = Math.ceil(Math.random()*15);
                        if (x <=5){
                                $("#computerChoice").html(computerChoice[0]);
                        }else if (x <=10){
                                $("#computerChoice").html(computerChoice[1]);
                        }else if (x <=15){
                                $("#computerChoice").html(computerChoice[2]);
                        }else{
                                $("#computerChoice").html("Choose rock, paper, or scissor");
                        }
                } 
                var winner=["TIE","You WON","You LOSE"];
                if(userChoice === choices[0]){
                        if(x <= 5){
                                $("#result").html(winner[0]);
                        }else if(x <= 10){
                                $("#result").html(winner[2]);
                        }else if(x <= 15){
                                $("#result").html(winner[1]);
                        }
                }
                if(userChoice === choices[1]){
                        if(x <= 5){
                                $("#result").html(winner[1]);
                        }else if(x <= 10){
                                $("#result").html(winner[0]);
                        }else if(x <= 15){
                                $("#result").html(winner[2]);
                        }
                }
                if(userChoice === choices[2]){
                        if(x <= 5){
                                $("#result").html(winner[2]);
                        }else if(x <= 10){
                                $("#result").html(winner[1]);
                        }else if(x <= 15){
                                $("#result").html(winner[0]);
                        }
                }
                $("input").val("");
        });
});
 