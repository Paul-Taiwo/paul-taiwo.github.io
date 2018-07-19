
/*// Toggle active class
var licontain = document.getElementById("navLinks");
var links = document.getElementsByClassName("nav-link");
for (var i=0; i<links.lenght; i++) {
	links[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}*/

window.onscroll = function() {
	var navbar = document.querySelector(".myNav");

	if (window.pageYOffset > 50) {
		navbar.classList.add("onscroll");
	} else {
		navbar.classList.remove("onscroll");
	}
}
