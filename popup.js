// Saves options to chrome.storage
function save_options() {
  chrome.storage.sync.set({
    auto: document.getElementById('auto').checked
  }, function() {}, 750);
  });
}

document.getElementById('save').addEventListener('click',save_options);
