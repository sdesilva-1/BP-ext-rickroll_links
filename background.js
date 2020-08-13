chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({"toggle": 1}, function() {
    console.log('Value is set to 1');
  });
  chrome.storage.local.set({"rickroll": 0}, function() {
    console.log('Rickroll Value is set to 0');
  });
});

chrome.browserAction.onClicked.addListener(function() {
  chrome.storage.local.get("toggle", function(items) {
    let toggle = items["toggle"];
    if (toggle == 1) {
      chrome.storage.local.set({'toggle': 2});
      chrome.browserAction.setIcon({path: 'icon2.png'});
      chrome.browserAction.setTitle({title: "click to turn on"});
      alert("please reload the page")
    } else if (toggle == 2) {
      chrome.storage.local.set({'toggle': 1});
      chrome.browserAction.setIcon({path: 'icon1.png'});
      chrome.browserAction.setTitle({title: "click to turn off"});
      chrome.tabs.executeScript({
        file: 'content.js'
      });
    }
  });
});

chrome.webNavigation.onCompleted.addListener(function() {
  chrome.storage.local.get("rickroll",function(items){
    let rickroll = items["rickroll"];
    if (rickroll==1){
      chrome.tabs.executeScript({file:"content2b.js"});
    };
  });
});
