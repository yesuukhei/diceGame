//togloomin buh gazart ashiglagdah global huvisagchid 
var activePlayer;
var scores;
var roundScore;

// Togloom duussan  esehiig hadgalah toluviin huvisagch
var isGameOver;


var diceDom = document.querySelector(".dice");

initGame();

document.querySelector(".btn-roll").addEventListener("click", function(){
    if(isGameOver === false)
    {
        var diceNumber = Math.floor(Math.random()*6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    // buusan too ni 1 ees ylgaatai bol idevhtei toglogchiin eeljin onoog nemeh

    if(diceNumber != 1)
    {
        roundScore += diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore; 
    }
    else {
        switchToNextPlayer();

}
    }
});

// HOLD tovchni eventListener

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(isGameOver === false)
    {
        // ug toglogchin tsugluulsan eeljnii onoog global onoon deer ni nemeh
    scores[activePlayer] += roundScore;

    //delgets deer onoog ni uurchilno
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];


    //ug toglogch hojson esehiig shalgah
    if(scores[activePlayer] >= 10)
    {
        isGameOver = true;

        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer +"-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer +"-panel").classList.remove("active");
    } else {
        //toglogchiin eeljig solih
         switchToNextPlayer();
    }
    }
  
})

function switchToNextPlayer()
{
    //1 bolson uchir 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // herev idevhtei toglogch 0 bwl idevhtei toglogchig 1 bolgo. Ugui bol idevhtei togloch 1 bwl tuuniig 0 bolgo

    (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;

    //ulaan tsegiig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    
     //shoog alga bolgono
     diceDom.style.display = "none";
}

// Shine togloom ehluuleh tovchni evenListener
document.querySelector(".btn-new").addEventListener("click", function(){
    initGame();
    diceDom.style.display = "none";
});

function initGame()
{
    isGameOver = false;

    // Тоглогчийн ээлжийг хадгалах хувьсагч
     activePlayer = 0;

// Toglogchdin tsugluulsan onoog hadgalah huvisagch
 scores = [0, 0];

//Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch
 roundScore = 0;


// shooni ali talaaraa buusnig hadgalah huvisagch heregtei 1-6 onoo

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.add("active");
}