function Controller() {
    var service = new Service()
    //Count Down
    function countDown() {
        change('message', '<h3>3</h3>');
        setTimeout(function () { change('message', '<h3>2</h3>'); }, 1000);
        setTimeout(function () { change('message', '<h3>1</h3>'); }, 2000);
        setTimeout(function () { change('message', '<h3>Go</h3>'); }, 3000);
        setTimeout(function () { change('message', ''); }, 4000);
    }
    //Reset Game
    this.reset = function reset() {
        location.reload();
    }
    this.checkAttack = function checkAttack(power) {
        document.getElementById("knight").src = "knight-slash.png";
        setTimeout(function () { document.getElementById("knight").src = "knight.png"; }, 150);
        service.knightAttack(power);
        buttonTime(power);
        checkHeroHealth();
        checkMonsterHealth();
        draw();
    }
    function checkMonster() {
        checkHeroHealth();
        checkMonsterHealth();
        draw();
    }
    //Draw 
    function draw() {
        //monster's health
        document.getElementById('monster-health').style.width = service.monsterHealth() + "%";
        document.getElementById('monster-percent').innerHTML = service.monsterHealth() + '%';
        //hero's health
        document.getElementById('hero-health').style.width = service.heroHealth() + "%";
        document.getElementById('hero-percent').innerHTML = service.heroHealth() + '%';
    }
    function checkMonsterHealth() {
        if (service.monsterHealth() < 26) {
            document.getElementById("monster-health").style.backgroundColor = "#E67373";
        } else if (service.monsterHealth() < 51) {
            document.getElementById("monster-health").style.backgroundColor = "#E2E572";
        } else document.getElementById("monster-health").style.backgroundColor = "#5cb85c";
    }
    function checkHeroHealth() {
        if (service.heroHealth() < 26) {
            document.getElementById("hero-health").style.backgroundColor = "#E67373";
        } else if (service.heroHealth() < 51) {
            document.getElementById("hero-health").style.backgroundColor = "#E2E572";
        } else document.getElementById("hero-health").style.backgroundColor = "#5cb85c";
    }

    //Sets true or false for disabled buttons
    function disable(item, output) {
        document.getElementById(item).disabled = output;
    }
    //Changes innerHTML
    function change(item, output) {
        document.getElementById(item).innerHTML = output;
    }
    //Button timers
    function buttonTime(power) {
        if (power === 2) {
            change("dis-mega", `<div class="loader"></div>`);
            setTimeout(function () { change("dis-mega", `Mega Hit`); }, 30000);
            disable("mega", true);
            setTimeout(function () { disable("mega", false); }, 30000);
        } else if (power === 1) {
            change("dis-slash", `<div class="loader"></div>`);
            setTimeout(function () { change("dis-slash", `Slash`); }, 15000);
            disable("slash", true);
            setTimeout(function () { disable("slash", false); }, 15000);
        } else if (power === 0) {
            change("dis-stab", `<div class="loader"></div>`);
            setTimeout(function () { change("dis-stab", `Stab`); }, 2000);
            disable("stab", true);
            setTimeout(function () { disable("stab", false); }, 2000);
        }
    }
    //Initialize game
    function initialize() {
        disable("mega", true);
        disable("slash", true);
        disable("stab", true);
    }
    //Enable Buttons
    function enableButtons() {
        disable("mega", false);
        disable("slash", false);
        disable("stab", false);
    }
    this.modifier = function(){
        service.modifier();
    }
    //Start Game Function
    this.startGame = function startGame() {
        setTimeout(function () { service.monsterAttack(Math.floor((Math.random() * 11) + 1)); }, 3000);
        setTimeout(function () { checkMonster() }, Math.floor((Math.random() * 2000) + 500))
        setTimeout(function () { enableButtons() }, 3000);
        countDown();
    }
    checkMonsterHealth();
    draw();
    initialize();
}