// © 2014-2016 Ujjwal Goel. All rights reserved.

window.onload = setThemeAndBackground;
function setThemeAndBackground() {
    resetTheme();
    resetBackground();
    setBackgroundToMap();
    setThemeToGold();
}



// reset background
function resetBackground() {
    document.getElementById("one").className = bgbutton;
    document.getElementById("gold").className = bgbutton;
    document.getElementById("dsb").className = bgbutton;
    document.getElementById("lawngreen").className = bgbutton;
    document.getElementById("orange").className = bgbutton;
}

//background
function changeBackgroundToMap() {
    resetBackground()
    document.body.style.background = "url('Media/map-blurred.png') no-repeat center 28% fixed cover";
    document.getElementById("one").className = "bgbutton active";
}
function changeBackgroundToGold() {
    resetBackground()
    document.body.style.background = "gold";
    document.getElementById("gold").className = "bgbutton active";
}
function changeBackgroundToDeepskyblue() {
    resetBackground()
    document.body.style.background = "deepskyblue";
    document.getElementById("dsp").className = "bgbutton active";
}
function changeBackgroundToLawngreen() {
    resetBackground()
    document.body.style.background = "deepskyblue";
    document.getElementById("dsp").className = "bgbutton active";
}
function changeBackgroundToOrange() {
    changeBackground("Orange", "bgbutton", "bgbutton", "bgbutton", "bgbutton", "bgbutton active");
}


// reset theme
function resetTheme() {
    document.getElementById("t1").className = bgbutton;
    document.getElementById("t2").className = bgbutton;
    document.getElementById("t3").className = bgbutton;
    document.getElementById("t4").className = bgbutton;
}

//theme
function changeTheme(color) {
    var boxes = document.getElementsByClassName('container'),
        i = boxes.length;
    while (i--) {
        boxes[i].style.backgroundColor = color;
    }
    var boxess = document.getElementsByTagName('h2'),
        n = boxess.length;
    while (n--) {
        boxess[n].style.color = color;
    }
    document.getElementById('heading').style.color = color;

    resetTheme();
}
function setThemeToGold() {
    changeTheme("gold", "bgbutton active", "bgbutton", "bgbutton", "bgbutton");
}
function setThemeToDeepskyblue() {
    changeTheme("deepskyblue", "bgbutton", "bgbutton active", "bgbutton", "bgbutton");
}
function setThemeToLawngreen() {
    changeTheme("lawngreen", "bgbutton", "bgbutton", "bgbutton active", "bgbutton");
}
function setThemeToOrange() {
    changeTheme("orange", "bgbutton", "bgbutton", "bgbutton", "bgbutton active");
}