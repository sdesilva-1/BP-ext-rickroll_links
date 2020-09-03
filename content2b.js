chrome.storage.local.get(['rickroll'], function(items) {
  let rickroll = items["rickroll"];
  if (rickroll==1){
    chrome.tabs.create({ url: chrome.runtime.getURL("page.html") });
    chrome.storage.local.set({"rickroll": 0});
  }
});
