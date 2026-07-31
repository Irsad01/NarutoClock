const canvas = document.getElementById("effectsCanvas");
const ctx = canvas.getContext("2d");


function resize(){

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

}

resize();

window.addEventListener("resize", resize);


const particles = [];



export function spawnDust(x, y, direction = "left"){

    for(let i = 0; i < 2; i++){

        const speed = 1 + Math.random() * 2;

        particles.push({

            x,
            y,

            vx: direction === "left"
                ? -speed
                : speed,

            vy: -0.3 - Math.random() * 1.2,

            size: 3 + Math.random() * 4,

            alpha: 0.8,

            color: "rgba(255,255,255,0.9)",

            gravity: 0.03

        });

    }

}



export function spawnBoost(x, y){

    for(let i = 0; i < 25; i++){

        particles.push({

            x,
            y,

            vx:(Math.random()-0.5)*8,

            vy:(Math.random()-0.5)*8,

            size:2+Math.random()*5,

            alpha:1,

            color:`hsl(${170+Math.random()*30},100%,60%)`,

            gravity:0

        });

    }

}



export function spawnFire(x, y){

    for(let i = 0; i < 15; i++){

        particles.push({

            x,
            y,

            vx:(Math.random()-0.5)*3,

            vy:-Math.random()*4,

            size:4+Math.random()*3,

            alpha:1,

            color:`hsl(${20+Math.random()*40},100%,60%)`,

            gravity:-0.02

        });

    }

}


function update(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i = particles.length - 1; i >= 0; i--){

        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        p.vy += p.gravity;

        p.alpha -= 0.02;

        p.size *= 0.98;

        ctx.globalAlpha = p.alpha;

        ctx.fillStyle = p.color;

        ctx.beginPath();

        ctx.arc(

            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2

        );

        ctx.fill();

        if(p.alpha <= 0 || p.size < 0.3){

            particles.splice(i,1);

        }

    }

    ctx.globalAlpha = 1;

    requestAnimationFrame(update);

}

update();