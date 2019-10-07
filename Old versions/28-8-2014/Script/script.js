window.onload=setThemeAndBackground;
function setThemeAndBackground() {
		changeColorToOrignal();
		setThemeToGold();
}

//background
function changeBackground(color, one, two, three, four, five) {
		document.body.style.background = color;
		document.getElementById("one").className = one;
		document.getElementById("gold").className = two;
		document.getElementById("dsb").className = three;
		document.getElementById("lawngreen").className = four;
		document.getElementById("orange").className = five;
}
function changeColorToOrignal() {
		changeBackground("url('Media/map-blurred.png') no-repeat center 28% fixed", "bgbutton active", "bgbutton", "bgbutton", "bgbutton", "bgbutton");
}
function changeColorToGold() {
		changeBackground("gold", "bgbutton", "bgbutton active", "bgbutton", "bgbutton", "bgbutton");
}
function changeColorToDeepskyblue() {
		changeBackground("deepskyblue", "bgbutton", "bgbutton", "bgbutton active", "bgbutton", "bgbutton");
}
function changeColorToLawngreen() {
		changeBackground("Lawngreen", "bgbutton", "bgbutton", "bgbutton", "bgbutton active", "bgbutton");
}
function changeColorToOrange() {
		changeBackground("Orange", "bgbutton", "bgbutton", "bgbutton", "bgbutton", "bgbutton active");
}

//theme
function changeTheme(color, one, two, three, four) {
		var boxes = document.getElementsByClassName('container'),
			i = boxes.length;
		while(i--) {
			boxes[i].style.backgroundColor = color;
		}
		var boxess = document.getElementsByTagName('h2'),
			n = boxess.length;
		while(n--) {
			boxess[n].style.color = color;
		}
		document.getElementById('heading').style.color = color;
		document.getElementById("t1").className = one;
		document.getElementById("t2").className = two;
		document.getElementById("t3").className = three;
		document.getElementById("t4").className = four;
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