function mainProc(config) {
    const items = document.getElementById('files').getElementsByClassName('file');
    Array.from(items).forEach(item => {
        const fileName = item.firstElementChild.getAttribute('data-path');
        if (fileName.match(new RegExp(config.target))) {
            changeStateOfItem(item);
            console.log('-->', fileName)
        }
    });
}

function changeStateOfItem(x) {
    const className = 'Details--on';
    if (x.classList.contains(className)) {
        x.classList.remove(className)
    } else {
        x.classList.add(className)
    }
}

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
    if (request !== CLICK_EVENT) {
        console.warn('get unexpected request', request);
        return
    }
    console.log('try to close them');
    let resultMessage;
    try {
        getConfig(config => mainProc(config));
        resultMessage = 'ok';
    } catch (e) {
        console.log('error', e);
        resultMessage = 'fail';
    } finally {
        sendResponse(resultMessage)
    }
});
