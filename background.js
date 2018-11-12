console.log('background runsssning')

chrome.runtime.onMessage.addListener(reciever);

window.words = "";
// chrome.tabs.create({url:"popup.html"});
function reciever(request, sender, sendResponce) {
    console.log(request);
    window.word = request.text;

    //window.open("popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");



    if(request.text === 'grabphoto'){
        // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //     console.log('tabs', tabs)
        //     var tab = tabs[0];
        //     currentTab = tab; // used in later calls to get tab info
        //
        //     // var filename = getFilename(tab.url);
        //     // alert('Hello world!')
        //     // CaptureAPI.captureToFiles(tab, filename, displayCaptures,
        //     //                           errorHandler, progress, splitnotifier);
        // });
    }


}








// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var tab = tabs[0];
//     currentTab = tab; // used in later calls to get tab info
//
//     // var filename = getFilename(tab.url);
//
//     console.log('do i have tab', tab)
//
// });



// chrome.browserAction.onClicked.addListener(buttonClicked)
//
// function test(){
// [1,2,3].forEach( function (item) {
//     console.log('loading', item)
// })
// }
//
// test();
//
// function buttonClicked(tab) {
//     chrome.tabs.create({url:'file:///C:/Users/ilmad/Desktop/test.html'}, function(tab) {
//
//
//     });
// }



// chrome.tabs.update(tab.id, {url: 'http://stackoverflow.com', active: true}, function(tab1) {
//
//     // add listener so callback executes only if page loaded. otherwise calls instantly
//     var listener = function(tabId, changeInfo, tab) {
//
//         if (tabId == tab1.id && changeInfo.status === 'complete') {
//             // remove listener, so only run once
//             chrome.tabs.onUpdated.removeListener(listener);
//             // do stuff
//
//         }
//     }
//     chrome.tabs.onUpdated.addListener(listener);
// });
//
// chrome.app.runtime.onLaunched.addListener(function() {
//     chrome.app.window.create('popup.html', {
//         id: "mainwin",
//         "innerBounds": { "width": 1024, "height": 768 }
//     });
// });