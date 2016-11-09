// Saves options to chrome.storage
function save_options() {
  chrome.storage.sync.set({
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  }, function() {
    // Update status to let user know options were saved.
    document.getElementById('status').innerHTML = 'Option Saved.';
    setTimeout(function() {
      document.getElementById('status').innerHTML = '';
    }, 750);
  });
}

document.getElementById('save').addEventListener('click',save_options);
