

const STORAGE_KEYS = {


    ALARM:
    "ninja_alarm",


    THEME:
    "ninja_theme",


    SETTINGS:
    "ninja_settings",


    STOPWATCH:
    "ninja_stopwatch"


};





function saveData(key,value){


    localStorage.setItem(

        key,

        JSON.stringify(value)

    );


}





function loadData(key){


    const data =

    localStorage.getItem(key);



    if(!data){

        return null;

    }



    return JSON.parse(data);


}





function removeData(key){


    localStorage.removeItem(key);


}




function saveAlarm(alarm){


    saveData(

        STORAGE_KEYS.ALARM,

        alarm

    );


}





function loadAlarm(){


    return loadData(

        STORAGE_KEYS.ALARM

    );


}





function saveTheme(theme){


    saveData(

        STORAGE_KEYS.THEME,

        theme

    );


}





function loadTheme(){


    return loadData(

        STORAGE_KEYS.THEME

    );


}





function saveStopwatch(time){


    saveData(

        STORAGE_KEYS.STOPWATCH,

        time

    );


}




function loadStopwatch(){


    return loadData(

        STORAGE_KEYS.STOPWATCH

    );


}




function saveSettings(settings){


    saveData(

        STORAGE_KEYS.SETTINGS,

        settings

    );


}





function loadSettings(){


    return loadData(

        STORAGE_KEYS.SETTINGS

    );


}





function clearStorage(){


    Object.values(

        STORAGE_KEYS

    ).forEach(key=>{


        removeData(key);


    });


}




export {


    saveData,

    loadData,

    removeData,


    saveAlarm,

    loadAlarm,


    saveTheme,

    loadTheme,


    saveStopwatch,

    loadStopwatch,


    saveSettings,

    loadSettings,


    clearStorage

};