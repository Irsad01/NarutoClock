
const alarmInput =
document.getElementById("alarmTime");


const setAlarmButton =
document.getElementById("setAlarm");


const stopAlarmButton =
document.getElementById("stopAlarm");


const cancelAlarmButton =
document.getElementById("cancelAlarm");


const alarmStatus =
document.getElementById("alarmStatus");


const alarmSound =
document.getElementById("alarmSound");




let alarmTime = null;

let alarmActive = false;

let alarmTimeout = null;




function getCurrentTime(){


    const now = new Date();


    const hours =

    String(now.getHours())
    .padStart(2,"0");


    const minutes =

    String(now.getMinutes())
    .padStart(2,"0");



    return `${hours}:${minutes}`;

}



function setAlarm(){


    const value = alarmInput.value;



    if(!value){


        alarmStatus.textContent =

        "Please select alarm time";


        return;

    }



    alarmTime = value;


    alarmActive = true;



    alarmStatus.textContent =

    `⏰ Alarm set for ${alarmTime}`;


}




function startAlarm(){


    if(!alarmSound) return;



    alarmSound.currentTime = 0;


    alarmSound.volume = 1;



    alarmSound.play()

    .catch(error=>{

        console.log(
            "Audio blocked:",
            error
        );

    });



    alarmStatus.textContent =

    "🔔 Alarm Ringing!";



    ninjaAlert();




    alarmTimeout = setTimeout(()=>{


        stopAlarm();


    },30000);



}





function stopAlarm(){



    if(!alarmSound) return;



    alarmSound.pause();


    alarmSound.currentTime = 0;



    if(alarmTimeout){

        clearTimeout(alarmTimeout);

        alarmTimeout = null;

    }



    alarmStatus.textContent =

    "🔕 Alarm stopped";


}




function cancelAlarm(){



    alarmActive = false;


    alarmTime = null;



    stopAlarm();



    alarmStatus.textContent =

    "No Alarm Set";


}




function checkAlarm(){


    if(!alarmActive) return;



    const currentTime =

    getCurrentTime();




    if(currentTime === alarmTime){



        startAlarm();



        alarmActive = false;


    }


}




function ninjaAlert(){


    const ninja =

    document.getElementById("ninja");



    if(!ninja) return;



    ninja.classList.add(
        "speed"
    );



    setTimeout(()=>{


        ninja.classList.remove(
            "speed"
        );


    },3000);



}




if(setAlarmButton){


    setAlarmButton.addEventListener(

        "click",

        setAlarm

    );


}



if(stopAlarmButton){


    stopAlarmButton.addEventListener(

        "click",

        stopAlarm

    );


}



if(cancelAlarmButton){


    cancelAlarmButton.addEventListener(

        "click",

        cancelAlarm

    );


}




setInterval(

    checkAlarm,

    1000

);




export {

    setAlarm,

    startAlarm,

    stopAlarm,

    cancelAlarm

};