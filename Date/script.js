let btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    let date = document.getElementById("date").value;
    const full_date = new Date(date);
    let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekday = days[full_date.getDay()];
    document.querySelector("#result").innerText = `The weekday is ${weekday}`;
});
