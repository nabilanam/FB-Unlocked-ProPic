chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    let matches = null;

    if (location.href.startsWith("https://m."))
        matches = document.documentElement.innerHTML.match(/entity_id:([0-9]+)/);
    else
        matches = document.documentElement.innerHTML.match(/"entity_id":"([0-9]+)"/);

    if (matches !== null && matches.length >= 2)
        sendResponse({entity_id: matches[1]});
    else
        sendResponse({entity_id: null});
});