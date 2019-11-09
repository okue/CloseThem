// Saves options to chrome.storage
function save_options() {
    const target = document.getElementById('target').value;
    chrome.storage.sync.set({target}, () => {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
            status.textContent = '';
        }, 750);
    });
}

// Saves default options to chrome.storage
function reset_options() {
    chrome.storage.sync.set(defaultConfig, () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options reset.';
        setTimeout(() => {
            status.textContent = '';
        }, 750);
        document.getElementById('target').value = defaultConfig.target
    });
}

// Restores select box state using the preferences stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get(defaultConfig, (items) => {
        document.getElementById('target').value = items.target
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('reset').addEventListener('click', reset_options);
