//Control the top navigations Responsiveness
function myFunction() {
    var x = document.getElementById("responsiveNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Function for slide image
var imgSlideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var allSlides = document.getElementsByClassName("imgSlide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
    }
    imgSlideIndex++;
    if (imgSlideIndex > allSlides.length) {
        imgSlideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    allSlides[imgSlideIndex - 1].style.display = "block";
    dots[imgSlideIndex - 1].className += " active";
    // Change image every 5 seconds
    setTimeout(showSlides, 5000);
}


// Function to control countdown timer
function getTimeRemaining(timeup) {
    var total = Date.parse(timeup) - Date.parse(new Date());
    var seconds = Math.floor((total / 1000) % 60);
    var minutes = Math.floor((total / 1000 / 60) % 60);
    var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    var days = Math.floor(total / (1000 * 60 * 60 * 24));
    var days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        'total': total,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, timeup) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var total = getTimeRemaining(timeup);

        daysSpan.innerHTML = total.days;
        hoursSpan.innerHTML = ('0' + total.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + total.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + total.seconds).slice(-2);

        if (total.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 14 * 24 * 60 * 60 * 1000);
initializeClock('countdown', deadline);


// Create username and password function
function createUandP() {
    var userS = document.getElementById("usersBox");
    var userInfo = document.createElement("div");

    var userText = document.createTextNode("Success! You have [" + document.getElementById('userName').value + "] as your Username and [" + document.getElementById('password').value + "] as your Password");
    userInfo.appendChild(userText);
    userS.appendChild(userInfo);
}

// Delete username and password
function deleteUandP() {
    var userS = document.getElementById("usersBox");
    if (userS.childNodes.length > 0) {
        userS.removeChild(userS.childNodes[0]);
    }
}


// This controls the for Loop actions for Security number generator
function forLoop() {
    var genNumber = '';
    var number = 1;
    for (var i = 0; i < number; i++) {
        var random = Math.floor((Math.random() * 10000) + 100);
        if (i == 1) {
            genNumber += random;
        } else {
            genNumber += random + '';
        }
        document.getElementById('forloop').innerHTML = genNumber;
    }
}


// Transition control for Site Mode
function DchangeColor(siteMode, colorSwitch) {
    var siteMode = document.getElementById(siteMode);
    siteMode.style.transition = "background 2s linear 0.5s";
    siteMode.style.background = colorSwitch;
}

function LchangeColor(siteMode, colorSwitch) {
    var siteMode = document.getElementById(siteMode);
    siteMode.style.transition = "background 2s linear 0.5s";
    siteMode.style.background = colorSwitch;
}

// Local Storage Oject
function select() {
    var courseLists = document.getElementById("suggest").value;
    localStorage.setItem("suggest", courseLists);
}

function showSuggestion() {
    if (typeof(Storage) !== "undefined") {
        var suggest = localStorage.getItem("suggest");
        alert(suggest);
    }

}

// Displays or pulls the course list
function ajaxJson() {
    var displayCourse = document.getElementById("displayCourse");
    var cList = new XMLHttpRequest();
    cList.open("GET", "json/everGreenCourse.json", true);
    cList.setRequestHeader("Title", "Ever Green Course List", true);
    cList.onreadystatechange = function() {
        if (cList.readyState == 4 && cList.status == 200) {
            var data = JSON.parse(cList.responseText);
            displayCourse.innerHTML = "";
            for (var obj in data) {
                displayCourse.innerHTML += data[obj].course + "<hr />";
            }
        }
    }
    cList.send(null);
    displayCourse.innerHTML = "initializing please wait...";
}

function closeajaxJson() {
    document.getElementById("displayCourse").innerHTML = "";
}


//onpageload used on the contact us page
function onLoadPage() {
    alert("Welcome to the Student Support Center. Please use the form below.");
}


// Style body using Javascript
function siteColor() {
    document.getElementById('siteBody').style.backgroundColor = "#0076b6";
}


// Dispay info using AJAX
function loadInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("conRequest").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "info.html", true);
    xhttp.send();
}

// Function for ipen and close form on contact us page
function openForm() {
    document.getElementById("formSubmit").style.display = "block";
}

function closeForm() {
    document.getElementById("formSubmit").style.display = "none";
}