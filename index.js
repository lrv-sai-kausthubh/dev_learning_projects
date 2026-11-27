let start_cmd = document.getElementById("startGame");
let message_element = document.getElementById("message-el");
let sum_to_display = document.getElementById("display_sum");
let cards_to_display = document.getElementById("card_display");
let new_game_create = document.getElementById("newgame");
let new_card_create = document.getElementById("newcard");


// intro into objects
let player_el = document.getElementById("player_el");

// player object
let player = {
    name : "Lrv",
    chips : 145,
}


player_el.textContent = player.name + ": $" + player.chips;

let first_card = 1;
let second_card = 10;
let sum = 0;

let cards = [first_card,second_card];

let hasBlackJack = false;
let isAlive = true;
let message = "";


// function to generate a random card between 1-13
function random_card(){
    let card = Math.floor(Math.random() * 13) + 1;
    // Ace (1) is treated as 11 points
    if(card === 1){return 11;}
    // Jack (11), Queen (12) and King (13) are treated as 10 points
    if(card >= 11){return 10;}
    // All other cards retain their original value (2-10)
    return card;
}

// function to start the game
function start_game(){
    first_card = random_card();
    second_card = Math.floor(Math.random() * 11) + 1;
    cards = [first_card,second_card];
    sum = cards[0] + cards[1];
    hasBlackJack = false;
    isAlive = true;
    render_game();
}


// function to display the game state
function render_game(){
    if(sum < 21 && isAlive){
        message += "Want to draw another card?";
    }else if(sum === 21){
        message += "Blackjack!";
        hasBlackJack = true;
    }else{
        message += "You Lost";
        isAlive = false;
    }

    message_element.textContent = message;
    message = "";

    let temp = "";
    temp += "Sum: ";
    temp += sum;

    sum_to_display.textContent = temp;

    temp = "";
    temp += "Cards: ";

    for(let i = 0; i < cards.length; i++){
        temp += cards[i];
        temp += " ";
    }

    cards_to_display.textContent = temp;
}


// Start Game button
start_cmd.addEventListener('click', () =>{
    console.log("Start button is pressed");
    start_game();
})


// New Card button
new_card_create.addEventListener('click', () =>{
    console.log("Drawing a new card");

    if(sum < 21 && isAlive){
        let new_card = random_card();
        cards.push(new_card);
        sum = 0;
        for(let i = 0; i < cards.length; i++)sum += cards[i];
        render_game();
    }
})