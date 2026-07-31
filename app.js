import "./js/clock.js";


import "./js/weather.js";


import "./js/ninja.js";


import "./js/particles.js";


import "./js/stopwatch.js";


import "./js/countdown.js";


import "./js/alarm.js";


import "./js/theme.js";



import {

    loadSettings

} from "./js/storage.js";





function init(){


    console.log(

        "🥷 Ninja Time Started"

    );



    loadApplicationData();


    setupEvents();



}






function loadApplicationData(){



    const settings =

    loadSettings();



    if(settings){


        console.log(

            "Saved Settings Loaded",

            settings

        );


    }



}





function setupEvents(){



    document.addEventListener(

        "visibilitychange",

        ()=>{


            if(

                document.hidden

            ){


                console.log(

                    "App paused"

                );


            }

            else{


                console.log(

                    "App resumed"

                );


            }


        }

    );


}




document.addEventListener(

    "DOMContentLoaded",

    init

);



const tickSound =

document.getElementById(
    "tickSound"
);




function playTick(){


    if(!tickSound) return;



    tickSound.currentTime = 0;



    tickSound.volume = 0.25;



    tickSound.play()

    .catch(()=>{});


}



let lastSecond = -1;



setInterval(()=>{


    const second =

    new Date().getSeconds();



    if(second !== lastSecond){


        lastSecond = second;



        playTick();



    }



},100);




function ninjaBoostEvent(){


    const ninja =

    document.getElementById(
        "ninja"
    );



    if(!ninja) return;



    ninja.classList.add(

        "speed"

    );



    setTimeout(()=>{


        ninja.classList.remove(

            "speed"

        );


    },2000);


}




window.addEventListener(

    "ninjaBoost",

    ninjaBoostEvent

);





function mobileOptimize(){



    if(

        window.innerWidth < 600

    ){


        document.body.classList.add(

            "mobile"

        );


    }


}





window.addEventListener(

    "resize",

    mobileOptimize

);



mobileOptimize();




window.addEventListener(

    "error",

    (error)=>{


        console.error(

            "Ninja Time Error:",

            error.message

        );


    }

);




console.log(

    `
    🥷 Ninja Time Loaded

    ⚡ Clock Ready
    🌦 Weather Ready
    ⏱ Timers Ready
    🔔 Alarm Ready
    🎨 Theme Ready

    `

);