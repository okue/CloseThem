function getConfig(cont) {
    chrome.storage.sync.get(defaultConfig, (config) => cont(config));
}

function setConfig(config, cont) {
    chrome.storage.sync.set(config, () => cont());
}