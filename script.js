function rollTheDice()  {
    let randomNum = Math.ceil(Math.random() * 6);
    let diceImages = document.getElementById("diceImg");
    if (randomNum === 1) {
        diceImages.src = "assert/1.png";
    } else if (randomNum === 2) {
        diceImages.src = "assert/2.png";
    } else if (randomNum === 3) {
        diceImages.src = "assert/3.png";
    } else if (randomNum === 4) {
        diceImages.src = "assert/4.png";
    } else if (randomNum === 5) {
        diceImages.src = "assert/5.png";
    } else if (randomNum === 6) {
        diceImages.src = "assert/6.png";
    } 
}