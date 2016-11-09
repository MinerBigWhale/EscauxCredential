// Saves options to chrome.storage
function save_options() {
  chrome.storage.sync.set({
    auto: document.getElementById('auto').checked,
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  }, function() {
    // Update status to let user know options were saved.
    document.getElementById('status').classList.add('fadeinout');
    setTimeout(function() {
      document.getElementById('status').classList.remove('fadeinout');
    }, 5000);
  });
}

// Restores credential state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    auto: true,
    username: '@scrl.irisnet.be',
    password: ''
  }, function(items) {
    document.getElementById('auto').checked = items.auto;
    document.getElementById('username').value = items.username;
    document.getElementById('password').value = items.password;
  });
}

restore_options();

document.getElementById('save').addEventListener('click',save_options);
