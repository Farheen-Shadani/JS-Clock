let updateTime = () => {

    let now = new Date();
    let timeOfDay;
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let year = now.getFullYear().toString();

    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours < 10 ? "0" : "") + hours;
    hours = (hours == 0) ? 12 : hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    timeOfDay = (hours < 12) ? "AM" : "PM";

    document.querySelector("#hours").innerHTML = `${hours} :`;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
    document.querySelector("#time").innerHTML = timeOfDay;
    document.querySelector(".one").innerHTML = year.charAt(0);
    document.querySelector(".two").innerHTML = year.charAt(2);
    document.querySelector(".three").innerHTML = year.charAt(3);

}
let clock = setInterval(updateTime);