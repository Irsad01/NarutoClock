import {

    saveTheme,

    loadTheme

} from "./storage.js";



const THEMES = {

    DAY: "day",

    NIGHT: "night",

    RAIN: "rain",

    SNOW: "snow",

    GOLD: "gold-mode"

};



function applyTheme(theme){

    document.body.classList.remove(

        THEMES.DAY,

        THEMES.NIGHT,

        THEMES.RAIN,

        THEMES.SNOW,

        THEMES.GOLD

    );

    document.body.classList.add(theme);

    saveTheme(theme);

}



function toggleTheme(){

    if(document.body.classList.contains(THEMES.DAY)){

        applyTheme(THEMES.NIGHT);

    }

    else{

        applyTheme(THEMES.DAY);

    }

}


function activateGoldenMode(){

    applyTheme(THEMES.GOLD);

}


function removeGoldenMode(){

    document.body.classList.remove(THEMES.GOLD);

}



function loadSavedTheme(){

    const saved = loadTheme();

    if(saved === THEMES.GOLD){

        applyTheme(THEMES.GOLD);

    }

}



loadSavedTheme();



export{

    applyTheme,

    toggleTheme,

    activateGoldenMode,

    removeGoldenMode

};