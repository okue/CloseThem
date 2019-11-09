function getConfig(cont) {
    chrome.storage.sync.get(defaultConfig, (config) => cont(config));
}