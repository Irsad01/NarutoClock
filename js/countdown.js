const countdownInput =
document.getElementById(
    "countdownInput"
);


const countdownDisplay =
document.getElementById(
    "countdownDisplay"
);


const startCountdownButton =
document.getElementById(
    "startCountdown"
);




let countdownSeconds = 0;


let countdownInterval = null;


let isCounting = false;




function formatTime(seconds){


    const minutes =
    Math.floor(seconds / 60);



    const remainingSeconds =
    seconds % 60;



    return (

        String(minutes)
        .padStart(2,"0")

        +

        ":"

        +

        String(remainingSeconds)
        .padStart(2,"0")

    );


}


function updateCountdownDisplay(){


    countdownDisplay.textContent =

    formatTime(countdownSeconds);


}



function startCountdown(){


    if(isCounting) return;



    countdownSeconds =

    Number(countdownInput.value);



    if(

        !countdownSeconds ||

        countdownSeconds <= 0

    ){

        countdownDisplay.textContent =
        "00:00";

        return;

    }



    isCounting = true;



    updateCountdownDisplay();



    countdownInterval = setInterval(()=>{


        countdownSeconds--;



        updateCountdownDisplay();




        if(countdownSeconds <= 0){


            finishCountdown();


        }



    },1000);



}




function finishCountdown(){


    clearInterval(

        countdownInterval

    );



    isCounting = false;



    countdownSeconds = 0;



    countdownDisplay.textContent =
    "00:00";



    countdownComplete();


}




function countdownComplete(){


    console.log(
        "Countdown Finished!"
    );



    

}


startCountdownButton.addEventListener(

    "click",

    startCountdown

);




countdownDisplay.textContent =
"00:00";




export {

    startCountdown,

    finishCountdown

};