chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(null, {
        code: 'var config = ' + JSON.stringify(getKeywords)
    }, function() {
        chrome.tabs.executeScript(null, {file: 'test3.js'});
    });
    , 
    {
    url: [{
        // Runs on example.com, example.net, but also example.foo.com
        hostContains: '.facebook.'
    }],
});
