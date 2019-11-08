function setText(str) {
    chrome.browserAction.setBadgeText({text: str})
}

chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.sendMessage(tab.id, "Action", response => {
        setText(response);
        setTimeout(() => setText(""), 1200)
    })
});
