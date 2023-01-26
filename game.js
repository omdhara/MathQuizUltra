function addUser() {
    Player1_Name = document.getElementById("player1_name_input").value;
    Player2_Name = document.getElementById("player2_name_input").value;
    localStorage.setItem("Player1_Name",Player1_Name);
    localStorage.setItem("Player2_Name",Player2_Name);

    window.location = "index_game_screen.html";
}