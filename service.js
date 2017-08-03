function Service() {
    //Knight Object
    var knight = {
        name: "Knight",
        health: 100,
        attack: [5, 10, 15],
    }
    var monster = {
        name: "Monster",
        health: 100,
    }
    var time = 0;
    //Monster Timer
    function monsterTimer() {
        time = Math.floor((Math.random() * 3000) + 500);
    }
    //Monster Attack
    this.monsterAttack = function monsterAttack(power) {
        if (knight.health > 0) {
            document.getElementById("monster").src = "ork-slash.png";
            setTimeout(function () { document.getElementById("monster").src = "ork.png"; }, 150);
            knight.health -= power;
        } else if (knight.health <= 0) {
            knight.health = 0;
            gameOver(2);
        }
        setTimeout(function () { monsterAttack(Math.floor((Math.random() * 15) + 1)) }, Math.floor((Math.random() * 2800) + 500));
        if (knight.health < 80) {
            drawItem();
        }
    }
    function drawItem() {
        var item = 
        `
        <a href="javascript:void(0)" onclick="app.controller.modifier()"><img id="sword" src="sword1.png" alt="sword image"></a>
        `
        document.getElementById("message").innerHTML = item;
    }
    // this.modifier = function(){
    //     for (var i = 0; i < knight.attack.length; i++){
    //         knight.attack.push(knight.attack[i] * 2);
    //     }
    //     document.getElementById("message").innerHTML = "";
    // }
    //Hero Attack
    this.knightAttack = function knightAttack(power) {
        if (monster.health > 0) {
            monster.health -= knight.attack[power];
        } else if (monster.health <= 0) {
            monster.health = 0;
            gameOver(1);
        }
    }
    //Monster Health
    this.monsterHealth = function monsterHealth() {
        var monsterCopy = JSON.parse(JSON.stringify(monster))
        return monsterCopy.health;
    }
    //Hero health
    this.heroHealth = function heroHealth() {
        var heroCopy = JSON.parse(JSON.stringify(knight))
        return heroCopy.health;
    }
    //Hero health
    this.heroHit = function heroHit() {
        var heroCopy = JSON.parse(JSON.stringify(knight))
        return heroCopy.attack;
    }
    //Sets true or false for disabled buttons
    function disable(item, output) {
        document.getElementById(item).disabled = output;
    }
    //Changes innerHTML
    function change(item, output) {
        document.getElementById(item).innerHTML = output;
    }
    function gameOver(val) {
        setTimeout(function () { control.reset(); }, 1000);
        if (val == 2) {
            alert("You Lost!");
        } if (val == 1) {
            alert("You Won!")
        }
        location.reload();
    }
}