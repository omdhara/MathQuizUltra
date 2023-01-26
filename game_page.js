player1_name = localStorage.getItem("Player1_Name");
player2_name = localStorage.getItem("Player2_Name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function Send() 
{
    var operator = document.getElementById("opretor").value;
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    if(operator === "*")
    {
        console.log(number1 +" "+ "x" + " "+ number2);
    
        question_word = "<h4 id='word_display'> Q. "+number1+" "+"x"+" "+number2+"</h4>";
        input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>";
        row = question_word + input_box + check_button ;
        document.getElementById("output").innerHTML = row;
    }

    
    if(operator === "+")
    {
        console.log(number1 +" "+ "+" + " "+ number2);
    
        question_word = "<h4 id='word_display'> Q. "+number1+" "+"+"+" "+number2+"</h4>";
        input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>";
        row = question_word + input_box + check_button ;
        document.getElementById("output").innerHTML = row;
    }
    
    if(operator === "-")
    {
        console.log(number1 +" "+ "-" + " "+ number2);
    
        question_word = "<h4 id='word_display'> Q. "+number1+" "+"-"+" "+number2+"</h4>";
        input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>";
        row = question_word + input_box + check_button ;
        document.getElementById("output").innerHTML = row;
    }

    if(operator === "/")
    {
        console.log(number1 +" "+ "÷" + " "+ number2);
    
        question_word = "<h4 id='word_display'> Q. "+number1+" "+"÷"+" "+number2+"</h4>";
        input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>";
        row = question_word + input_box + check_button ;
        document.getElementById("output").innerHTML = row;
    }
    

}

//Defining Vars
question_turn = "player1";
answer_turn = "player2";

function check() {
    // Get the user's answer
    var userAnswer = document.getElementById("input_check_box").value;

    //Operators Check
    var operator = document.getElementById("opretor").value;
    
    // Get the correct answer
    var correctAnswer;
    if (operator === "*") {
      correctAnswer = Number(document.getElementById("number1").value) * Number(document.getElementById("number2").value);
    } 
    else if (operator === "+") {
      correctAnswer = Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value);
    } 
    else if (operator === "-") {
      correctAnswer = Number(document.getElementById("number1").value) - Number(document.getElementById("number2").value);
    } 
    else if (operator === "/") {
      correctAnswer = Number(document.getElementById("number1").value) / Number(document.getElementById("number2").value);
    }
    
   // Check if the user's answer is correct
   if(userAnswer == correctAnswer)
    {
        
        if(question_turn == "player2")
        {
            player1_score++;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            
            player2_score++;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
   
   // Switch the question and answer turns
   if(question_turn === "player1")
   {
   question_turn = "player2";
   answer_turn ="player1";
   document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
   document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
   }
   
   else
   {
   question_turn = "player1";
   document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
   document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
   }


    //Printing the correct Answer
    console.log("Correct Answer: "+ correctAnswer);
    var answer_label = document.getElementById("answer_label");
    answer_label.innerHTML = "Correct Answer: " + correctAnswer;

    // Clear the question and answer elements
    document.getElementById("output").innerHTML = "";
  }
  