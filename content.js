chrome.storage.local.get(['toggle'], function(items) {
  let toggle = items["toggle"];
  if (toggle==1){
    var x = document.getElementsByTagName("a");
    for (i = 0; i < x.length; i++) {
      x[i].setAttribute("href","https://www.youtube.com/watch?v=oHg5SJYRHA0");
    }
  }
});
