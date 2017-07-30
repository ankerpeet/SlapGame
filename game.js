//Slap Game - Anker Peet
var heroHealth = 100;
var monsterHealth = 100;

//Health Functions
function health() {
    document.getElementById('monster-health').style.width = monsterHealth + "%";
    document.getElementById('monster-percent').innerHTML = monsterHealth + '%';
}
function healthMonster() {
    document.getElementById('hero-health').style.width = heroHealth + "%";
    document.getElementById('hero-percent').innerHTML = heroHealth + '%';
}
//Hero Attack
function knightAttack(power) {
    if (monsterHealth > 0) {
        document.getElementById("knight").src = "knight-slash.png";
        setTimeout(function () { document.getElementById("knight").src = "knight.png"; }, 150);
        monsterHealth -= power;
        health();
        checkMonsterHealth();
    } else if (monsterHealth <= 0) {
        monsterHealth = 0;
        health();
        checkMonsterHealth();
        gameOver(1);
    }
    buttonTime(power);
}
//Monster Attack
function monsterAttack(power) {
    if (heroHealth > 0) {
        document.getElementById("monster").src = "ork-slash.png";
        setTimeout(function () { document.getElementById("monster").src = "ork.png"; }, 150);
        heroHealth -= power;
        healthMonster();
        checkHeroHealth();
    } else if (heroHealth <= 0) {
        heroHealth = 0;
        healthMonster();
        gameOver(2);
        checkHeroHealth();
    } setTimeout(function () { monsterAttack(Math.floor((Math.random() * 11) + 1)) }, Math.floor((Math.random() * 3000) + 500));
}
function checkMonsterHealth() {
    if (monsterHealth < 26) {
        document.getElementById("monster-health").style.backgroundColor = "#E67373";
    } else if (monsterHealth < 51) {
        document.getElementById("monster-health").style.backgroundColor = "#E2E572";
    } else document.getElementById("monster-health").style.backgroundColor = "#5cb85c";
}

function checkHeroHealth() {
    if (heroHealth < 26) {
        document.getElementById("hero-health").style.backgroundColor = "#E67373";
    } else if (heroHealth < 51) {
        document.getElementById("hero-health").style.backgroundColor = "#E2E572";
    } else document.getElementById("hero-health").style.backgroundColor = "#5cb85c";
}
//Button timers
function buttonTime(power) {
    if (power === 15) {
        change("dis-mega", `<div class="loader"></div>`);
        setTimeout(function () { change("dis-mega", `Mega Hit`); }, 30000);
        disable("mega", true);
        setTimeout(function () { disable("mega", false); }, 30000);
    } else if (power === 10) {
        change("dis-slash", `<div class="loader"></div>`);
        setTimeout(function () { change("dis-slash", `Slash`); }, 15000);
        disable("slash", true);
        setTimeout(function () { disable("slash", false); }, 15000);
    } else if (power === 5) {
        change("dis-stab", `<div class="loader"></div>`);
        setTimeout(function () { change("dis-stab", `Stab`); }, 2000);
        disable("stab", true);
        setTimeout(function () { disable("stab", false); }, 2000);
    }
}
//Resets Game
function reset() {
    heroHealth = 100;
    monsterHealth = 100;
    change("dis-mega", `Mega Hit`);
    disable("mega", false);
    change("dis-slash", `Slash`);
    disable("slash", false);
    change("dis-stab", `Stab`);
    disable("stab", false);
    health();
    healthMonster();
    checkHeroHealth();
    checkMonsterHealth();
}
//Sets true or false for disabled buttons
function disable(item, output) {
    document.getElementById(item).disabled = output;
}
//Changes innerHTML
function change(item, output) {
    document.getElementById(item).innerHTML = output;
}
//Game over
function gameOver(val) {
    setTimeout(function () { reset(); }, 1000);
    if (val == 2) {
        alert("You Lost!");
    } if (val == 1) {
        alert("You Won!")
    }
}
//Count Down
function countDown() {
    change('message', '3');
    setTimeout(function () { change('message', '2'); }, 1000);
    setTimeout(function () { change('message', '1'); }, 2000);
    setTimeout(function () { change('message', 'Go'); }, 3000);
}
//Start Game
function startGame() {
    health();
    checkMonsterHealth();
    healthMonster();
    setTimeout(function () { monsterAttack(Math.floor((Math.random() * 10) + 1)) }, 3000);
    setTimeout(function () { enableButtons() }, 3000);
    countDown();
}
//Enable Buttons
function enableButtons() {
    disable("mega", false);
    disable("slash", false);
    disable("stab", false);
}
//Initialize game
function initialize() {
    disable("mega", true);
    disable("slash", true);
    disable("stab", true);
}
initialize();