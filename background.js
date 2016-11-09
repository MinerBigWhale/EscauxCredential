(function() {
  chrome.storage.sync.get(['username', 'password', 'auto'], function(items) {
    document.querySelector("input[type='text'][name='username']").value = items.username;
    document.querySelector("input[type='password'][name='password']").value = items.password;
    if (items.auto){
      document.querySelector("input[type='submit'][name='submit']").click();
    }
  });
})();