
var elements = document.querySelectorAll("a");
for (var i= 0; i < elements.length; i++) {
    elements[i].style.color = "green";
}

/*
var elements = document.querySelectorAll("a");
for (var i= 0; i < elements.length; i++) {
    elements[i].style.color = "green";
    var x = elements[i];
    if(x.tagName=="IMG"){
        elements[i].src="replaced.jpg";
    }
}
*/
