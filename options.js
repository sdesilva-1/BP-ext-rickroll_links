document.getElementById("name-form").addEventListener('submit', function(e) {
   e.preventDefault()
   userName = document.getElementById("name-input").value;
   chrome.storage.local.set({"receivedName": userName}, function() {
     console.log('name is set to '+userName);
   });
   alert(userName);
});
