
var countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();


var myfunc = setInterval(function() {

    
    var now = new Date().getTime();

    
    var timeleft = countDownDate - now;


    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    
    document.getElementById("days").innerHTML = days + "<span> Days</span>";
    document.getElementById("hours").innerHTML = hours + "<span> Hours</span>";
    document.getElementById("mins").innerHTML = minutes + "<span> Minutes</span>";
    document.getElementById("secs").innerHTML = seconds + "<span> Seconds</span>";


    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
}, 1000);
