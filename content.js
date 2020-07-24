chrome.storage.local.get(['toggle'], function(items) {
  let toggle = items["toggle"];
  var x = document.getElementsByTagName("a");
  if (toggle==1){
    for (i = 0; i < x.length; i++) {
        x[i].setAttribute("href","https://www.youtube.com/watch?v=oHg5SJYRHA0");
    }
  }
});
