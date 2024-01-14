// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;

// Toglogchdin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

//Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch
var roundScore = 0;


// shooni ali talaaraa buusnig hadgalah huvisagch heregtei 1-6 onoo


document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function(){
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
        //1 bolson uchir 0 bolgono
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;

        //shoog alga bolgono
        diceDom.style.display = "none";

        // herev idevhtei toglogch 0 bwl idevhtei toglogchig 1 bolgo. Ugui bol idevhtei togloch 1 bwl tuuniig 0 bolgo

        (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;

        //ulaan tsegiig shiljuuleh
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    }

})
