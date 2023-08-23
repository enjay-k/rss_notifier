//Adapted from https://github.com/plahteenlahti/HelloClock

export const getTime = (hours, minutes) => {
    //hardcoding the time for now
    hours = 15;
    minutes = 55;
    
    clockHours = hours > 12 ? hours - 12 : hours;
    const hoursInDeg = ((clockHours + (minutes / 60)) * 360) / 12; //Set to hours + minutes fraction for more realistic clock representation
    const minutesInDeg = (minutes * 360) / 60;
    return { hoursInDeg, minutesInDeg, hours, minutes };
};