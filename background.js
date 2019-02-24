chrome.browserAction.onClicked.addListener(activeTab => {

    if (!activeTab.url.includes('.facebook.com/'))
        return;

    const setEntityId = res => {
        if (res !== undefined && res.entity_id !== null)
            chrome.tabs.create({"url": "https://graph.facebook.com/" + res.entity_id + "/picture?width=800"});
    };

    chrome.tabs.executeScript(activeTab.id, {file: "content.js"}, () => {
        if (!chrome.runtime.lastError)
            chrome.tabs.sendMessage(activeTab.id, null, setEntityId);
    });
});