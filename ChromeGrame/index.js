var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        clearInterval(checkDead); 
        loseGame();

    }
}, 10);

function resetGame() {
    character.style.top = "150px";

    
    block.style.left = "500px"; 
    block.style.animation = "block 1s infinite linear";

    
    block.style.display = "block";

    
    character.classList.remove("animate");
}


function loseGame() {
    clearInterval(checkDead); 
    alert("You lose! Game over!");
    resetGame();
}