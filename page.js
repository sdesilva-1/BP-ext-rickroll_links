var userName = localStorage.getItem('receivedName');
alert(userName);
if (userName == null) {
   userName = "shay";
}

function getGreeting() {
   document.getElementByType("p").innerHTML  = `${userName}`;
}

getGreeting()
