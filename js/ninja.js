import {
    spawnDust,
    spawnBoost
} from "./particles.js";

const track = document.getElementById("track");

const ninja = document.getElementById("ninja");
const ninjaImage = document.getElementById("ninjaImage");
const aura = document.getElementById("aura");
const shadow = document.getElementById("ninjaShadow");

const enemy = document.getElementById("enemy");
const enemyImage = document.getElementById("enemyImage");

const battleFlash = document.getElementById("battleFlash");
const rasengan = document.getElementById("rasengan");
const chidori = document.getElementById("chidori");


const ninjaFrames = [];

for (let i = 1; i <= 20; i++) {

    const img = new Image();

    img.src = `assets/images/ninja-run-${i}.png`;

    ninjaFrames.push(img);

}


const enemyFrames = [];

for (let i = 1; i <= 20; i++) {

    const img = new Image();

    img.src = `assets/images/enemy-run-${i}.png`;

    enemyFrames.push(img);

}


let ninjaFrame = 0;
let ninjaX = 0;

let enemyFrame = 0;
let enemyX = 0;

let lastNinjaFrame = 0;
let lastEnemyFrame = 0;
let lastDust = 0;

let boost = false;
let clashPlayed = false;


const BATTLE_DURATION = 15;

const CLASH_TIME = 14.7;

const POWER_TIME = 14.2;

const FRAME_SPEED = 70;
const BOOST_FRAME_SPEED = 45;

console.log("🥷 Ninja Battle System Loaded");


function animate(time) {

  
    const now = new Date();

    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    const cycleTime =
        (seconds % BATTLE_DURATION) +
        (milliseconds / 1000);

    const progress =
        cycleTime / BATTLE_DURATION;

   
    const trackWidth =
        track.clientWidth;

    const ninjaWidth =
        ninja.clientWidth;

    const enemyWidth =
        enemy.clientWidth;


    const ninjaStart = 0;

    const ninjaEnd =
        (trackWidth / 2) -
        ninjaWidth;

    const enemyStart =
        trackWidth -
        enemyWidth;

    const enemyEnd =
        trackWidth / 2;

    

    ninjaX =
        ninjaStart +
        (ninjaEnd - ninjaStart) *
        progress;

    enemyX =
        enemyStart -
        (enemyStart - enemyEnd) *
        progress;

    ninja.style.left =
        ninjaX + "px";

    enemy.style.left =
        enemyX + "px";



    aura.style.left =
        (ninjaX - 5) + "px";

    if (shadow) {

        shadow.style.left =
            (ninjaX + 18) + "px";

    }

    const frameSpeed =
        boost
        ? BOOST_FRAME_SPEED
        : FRAME_SPEED;

    

const ninjaSpeed =
    boost
        ? BOOST_FRAME_SPEED
        : FRAME_SPEED;

if (time - lastNinjaFrame >= ninjaSpeed) {

    if (cycleTime >= 14) {

        ninjaFrame = 19;

    } else {

        if (ninjaFrame > 18) {
            ninjaFrame = 0;
        }

    }

    ninjaImage.src =
        ninjaFrames[ninjaFrame].src;

    if (cycleTime < 14) {

        ninjaFrame++;

    }

    lastNinjaFrame = time;

}


if (time - lastEnemyFrame >= ninjaSpeed) {

    if (cycleTime >= 14) {

        enemyFrame = 19;

    } else {

        if (enemyFrame > 18) {
            enemyFrame = 0;
        }

    }

    enemyImage.src =
        enemyFrames[enemyFrame].src;

    if (cycleTime < 14) {

        enemyFrame++;

    }

    lastEnemyFrame = time;

}


    if (
        time - lastDust > 80
    ) {

        spawnDust(
            ninjaX + 18,
            92,
            "left"
        );

        spawnDust(
            enemyX + 72,
            92,
            "right"
        );

        lastDust = time;

    }

    

    if (
        cycleTime >= POWER_TIME
    ) {

        rasengan.style.opacity = 1;
        chidori.style.opacity = 1;

        rasengan.style.left =
            (ninjaX + 62) + "px";

        rasengan.style.top =
            "28px";

        chidori.style.left =
            (enemyX - 8) + "px";

        chidori.style.top =
            "28px";

    }
    else {

        rasengan.style.opacity = 0;
        chidori.style.opacity = 0;

    }

    requestAnimationFrame(
        animate
    );

}

requestAnimationFrame(
    animate
);


function playClash() {

    if (clashPlayed) return;

    clashPlayed = true;

    boost = true;

    aura.classList.add("active");

    spawnBoost(

        track.clientWidth / 2,

        45

    );


    document.body.animate(

        [

            { transform: "translateX(-5px)" },

            { transform: "translateX(5px)" },

            { transform: "translateX(-4px)" },

            { transform: "translateX(4px)" },

            { transform: "translateX(0)" }

        ],

        {

            duration: 500,

            easing: "ease-out"

        }

    );


    if (battleFlash) {

        battleFlash.classList.add("active");

        setTimeout(() => {

            battleFlash.classList.remove("active");

        }, 450);

    }


    setTimeout(() => {

        boost = false;

        aura.classList.remove("active");

    }, 800);

}



setInterval(() => {

    const now = new Date();

    const seconds = now.getSeconds();

    const milliseconds = now.getMilliseconds();


    const cycleTime =

        (seconds % BATTLE_DURATION) +

        (milliseconds / 1000);

    

    if (

        cycleTime >= CLASH_TIME &&

        !clashPlayed

    ) {

        playClash();

    }

   

    if (

        cycleTime < 0.05 &&

        clashPlayed

    ) {

        clashPlayed = false;

        boost = false;

        ninjaFrame = 0;
        enemyFrame = 0;

        ninjaX = 0;

        enemyX =

            track.clientWidth -

            enemy.clientWidth;

        aura.classList.remove("active");

        rasengan.style.opacity = 0;

        chidori.style.opacity = 0;

    }

}, 20);


window.addEventListener("resize", () => {

    enemyX = Math.min(

        enemyX,

        track.clientWidth - enemy.clientWidth

    );

});


window.addEventListener("load", () => {

    ninjaX = 0;

    enemyX =

        track.clientWidth -

        enemy.clientWidth;

    ninja.style.left = "0px";

    enemy.style.left =

        enemyX + "px";


    ninjaImage.src = ninjaFrames[0].src;

    enemyImage.src = enemyFrames[0].src;


    rasengan.style.opacity = 0;

    chidori.style.opacity = 0;


    aura.classList.remove("active");

    console.log("🥷 Battle Started");

});