chrome.storage.local.get(['rickroll'], function(items) {
  let rickroll = items["rickroll"];
  if (rickroll==1){
    //OPEN PAGE.HTML HERE!!!
    chrome.storage.local.set({"rickroll": 0});
  }
});
