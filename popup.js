// Saves options to chrome.storage
function save_options() {
  chrome.storage.sync.set({
    auto: document.getElementById('auto').checked
  }, function() {}, 750);
  });
}

// Restores credential state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    auto: true
  }, function(items) {
    document.getElementById('auto').checked = items.auto;
  });
}

restore_options();

document.getElementById('save').addEventListener('click',save_options);
