function setFontFamily() {
    document.body.style.fontFamily = "opendyslexic";
    document.querySelectorAll("*").forEach(elem =>
        elem.style.fontFamily = "opendyslexic"
    );
}


chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id
        },
        function: setFontFamily,
    });
});
