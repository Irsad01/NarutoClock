const stopwatchDisplay =
document.getElementById(
    "stopwatchDisplay"
);


const startButton =
document.getElementById(
    "startSW"
);


const pauseButton =
document.getElementById(
    "pauseSW"
);


const resetButton =
document.getElementById(
    "resetSW"
);




let milliseconds = 0;

let seconds = 0;

let minutes = 0;


let stopwatchInterval = null;


let running = false;




function format(value){

    return String(value)
    .padStart(2,"0");

}




function updateDisplay(){


    stopwatchDisplay.textContent =

    `${format(minutes)}:${format(seconds)}:${format(milliseconds)}`;


}




function startStopwatch(){


    if(running) return;



    running = true;



    stopwatchInterval = setInterval(()=>{


        milliseconds++;



        if(milliseconds >= 100){


            milliseconds = 0;


            seconds++;


        }



        if(seconds >= 60){


            seconds = 0;


            minutes++;


        }



        updateDisplay();



    },10);


}





function pauseStopwatch(){


    running = false;



    clearInterval(

        stopwatchInterval

    );


}





function resetStopwatch(){


    running = false;



    clearInterval(

        stopwatchInterval

    );



    milliseconds = 0;

    seconds = 0;

    minutes = 0;



    updateDisplay();


}




startButton.addEventListener(

    "click",

    startStopwatch

);



pauseButton.addEventListener(

    "click",

    pauseStopwatch

);



resetButton.addEventListener(

    "click",

    resetStopwatch

);




updateDisplay();





export {

    startStopwatch,

    pauseStopwatch,

    resetStopwatch

};