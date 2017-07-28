//Slap Game - Anker Peet
var heroHealth = 100;
var monsterHealth = 100;

function knightAttack(power) {
    if (monsterHealth > 0) {
        document.getElementById("knight").src = "knight-slash.png";
        setTimeout(function () { document.getElementById("knight").src = "knight.png"; }, 150);
        monsterHealth -= power;
        health();
        checkHealth();
    } else if (monsterHealth <= 0) {
        monsterHealth = 0;
        health();
        checkHealth();
        gameOver(1);
    }
    buttonTime(power);
}

function buttonTime(power) {
    if (power === 15) {
        document.getElementById("dis-mega").innerHTML = `<div class="loader"></div>`;
        setTimeout(function () { document.getElementById("dis-mega").innerHTML = `Mega Hit`; }, 30000);
        document.getElementById("mega").disabled = true;
        setTimeout(function () { document.getElementById("mega").disabled = false; }, 30000);
    } else if (power === 10) {
        document.getElementById("dis-slash").innerHTML = `<div class="loader"></div>`;
        setTimeout(function () { document.getElementById("dis-slash").innerHTML = `Slash`; }, 20000);
        document.getElementById("slash").disabled = true;
        setTimeout(function () { document.getElementById("slash").disabled = false; }, 20000);
    } else if (power === 5) {
        document.getElementById("dis-stab").innerHTML = `<div class="loader"></div>`;
        setTimeout(function () { document.getElementById("dis-stab").innerHTML = `Stab`; }, 2000);
        document.getElementById("stab").disabled = true;
        setTimeout(function () { document.getElementById("stab").disabled = false; }, 2000);
    }
}

function health() {
    document.getElementById('monster-health').style.width = monsterHealth + "%";
    document.getElementById('monster-percent').innerHTML = monsterHealth + '%';
}
function healthMonster() {
    document.getElementById('hero-health').style.width = heroHealth + "%";
    document.getElementById('hero-percent').innerHTML = heroHealth + '%';
}

function monsterAttack(power) {
    if (heroHealth > 0) {
        document.getElementById("monster").src = "ork-slash.png";
        setTimeout(function () { document.getElementById("monster").src = "ork.png"; }, 150);
        heroHealth -= power;
        healthMonster();
        checkHealth();
    } else if (heroHealth <= 0) {
        heroHealth = 0;
        healthMonster();
        gameOver(2);
        checkHealth();
    } setTimeout(function () { monsterAttack(Math.floor((Math.random() * 11) + 1)) }, Math.floor((Math.random() * 3000) + 500));
}
function checkHealth() {
    if (monsterHealth <= 100) {
        document.getElementById("monster-health").className = "progress-bar progress-bar-success";
    }
    else if (monsterHealth < 76) {
        document.getElementById("monster-health").className = "progress-bar progress-bar-warning";
    } else if (monsterHealth < 26) {
        document.getElementById("monster-health").className = "progress-bar progress-bar-danger";
    }
}

setTimeout(function () { monsterAttack(Math.floor((Math.random() * 10) + 1)) }, 1000);

function reset() {
    heroHealth = 100;
    monsterHealth = 100;
    document.getElementById("dis-mega").innerHTML = `Mega Hit`;
    document.getElementById("mega").disabled = false;
    document.getElementById("dis-slash").innerHTML = `Slash`;
    document.getElementById("slash").disabled = false;
    document.getElementById("dis-stab").innerHTML = `Stab`;
    document.getElementById("stab").disabled = false;
    health();
    healthMonster();
}
function gameOver(val) {
    setTimeout(function () { reset(); }, 1000);
    if (val == 2) {
        alert("You Lost!");
    } if (val == 1) {
        alert("You Won!")
    }
}

health();
checkHealth();
healthMonster();