

let countDownDate = localStorage.getItem('countDownDate');
if (!countDownDate) {
    
    countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();
    localStorage.setItem('countDownDate', countDownDate);
} else {
    countDownDate = parseInt(countDownDate);
}

const myfunc = setInterval(function() {
    
    const now = new Date().getTime();

    
    const timeleft = countDownDate - now;


    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


    
    document.getElementById("days").innerHTML = days + "<span> Days</span>";
    document.getElementById("hours").innerHTML = hours + "<span> Hours</span>";
    document.getElementById("mins").innerHTML = minutes + "<span> Minutes</span>";
    document.getElementById("secs").innerHTML = seconds + "<span> Seconds</span>";


    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("end").innerHTML = "TIME UP!!";
        alert("the countdown has ended! Merry Christmas")
        localStorage.removeItem('countDownDate')
    }
}, 1000);
