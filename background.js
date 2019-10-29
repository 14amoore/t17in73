chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ color: '#cf0eed' }, function() {
    console.log('The color is purple.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'adamoore.net' }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
