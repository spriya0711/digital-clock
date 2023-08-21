function updateTime() {
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    const currentDateTime = new Date();
    const hours = String(currentDateTime.getHours());
    const minutes = String(currentDateTime.getMinutes());
    const seconds = String(currentDateTime.getSeconds());

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

window.onload = function () {
    updateTime();
    setInterval(updateTime, 1000);
};