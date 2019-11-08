console.log('load main.js');

function mainProc() {
    const items = document.getElementById('files').getElementsByClassName('file');
    Array.from(items)
        .forEach(x => {
            const fileName = x.firstElementChild.getAttribute('data-path');
            if (fileName.match(new RegExp(setting.word))) {
                changeStateOfItem(x);
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

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    if (request === "Action") {
        console.log('try to close them');
        try {
            mainProc();
            sendResponse("success")
        } catch (e) {
            sendResponse("fail");
            console.log("error", e);
        }
    } else {
        console.log('No Action')
    }
});
