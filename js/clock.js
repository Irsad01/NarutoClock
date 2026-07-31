const hourElement = document.getElementById("hour");

const minuteElement = document.getElementById("minute");

const secondElement = document.getElementById("second");

const dayElement = document.getElementById("day");

const dateElement = document.getElementById("fullDate");

const greetingElement = document.getElementById("greeting");




function updateClock(){


    const now = new Date();



    let hour = now.getHours();

    let minute = now.getMinutes();

    let second = now.getSeconds();



    hour = String(hour).padStart(2,"0");

    minute = String(minute).padStart(2,"0");

    second = String(second).padStart(2,"0");



    if(hourElement){

        hourElement.textContent = hour;

    }


    if(minuteElement){

        minuteElement.textContent = minute;

    }


    if(secondElement){

        secondElement.textContent = second;

    }






    const days=[

        "Sunday",

        "Monday",

        "Tuesday",

        "Wednesday",

        "Thursday",

        "Friday",

        "Saturday"

    ];



    if(dayElement){

        dayElement.textContent =
        days[now.getDay()];

    }







    const options={

        day:"2-digit",

        month:"long",

        year:"numeric"

    };


    if(dateElement){

        dateElement.textContent =

        now.toLocaleDateString(

            "en-US",

            options

        );

    }







    const currentHour = now.getHours();


    let greeting="";



   if(currentHour < 12){

    greeting="Good Morning ☀️";

}
else if(currentHour < 17){

    greeting="Good Afternoon 🌤️";

}
else if(currentHour < 21){

    greeting="Good Evening 🌆";

}
else{

    greeting="Good Night 🌙";

}



    if(greetingElement){

        greetingElement.textContent=greeting;

    }


}






updateClock();



setInterval(

    updateClock,

    1000

);



console.log(

    "⏰ Clock Started"

);