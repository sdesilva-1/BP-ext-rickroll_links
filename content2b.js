chrome.storage.local.get(['rickroll'], function(items) {
  let rickroll = items["rickroll"];
  if (rickroll==1){
    window.open("page.html");//this bit doesn't work
    alert("yep");
    chrome.storage.local.set({"rickroll": 0});
  }
});
