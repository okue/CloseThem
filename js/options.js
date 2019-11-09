// Saves options to chrome.storage
function save_options() {
    const target = document.getElementById('target').value;
    setConfig({target}, () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
            status.textContent = '';
        }, 750);
    });
}

// Saves default options to chrome.storage
function reset_options() {
    setConfig(defaultConfig, () => {
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
    getConfig(config => {
        document.getElementById('target').value = config.target
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('reset').addEventListener('click', reset_options);
