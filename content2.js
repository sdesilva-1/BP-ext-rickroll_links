alert("ohoho");
chrome.tabs.onRemoved.addListener(function(tabid, removed) {
  alert("wow you closed the whole tab?? really??? -shay");
});
