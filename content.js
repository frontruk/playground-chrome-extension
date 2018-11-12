
console.log('loading content script')
window.addEventListener('load', submitAction);


function submitAction(){
    console.log('page loaded')
    let messeg = {
        text: 'grabphoto'
    }
    chrome.runtime.sendMessage(messeg);
}












// alert('ready')
//
// function createTab (url) {
//     return new Promise(resolve => {
//         chrome.tabs.create({url}, async tab => {
//         chrome.tabs.onUpdated.addListener(function listener (tabId, info) {
//             if (info.status === 'complete' && tabId === tab.id) {
//                 chrome.tabs.onUpdated.removeListener(listener);
//                 resolve(tab);
//             }
//         });
//     });
// });
// }
//     createTab('file:///C:/Users/ilmad/Desktop/test.html');
// chrome.tabs.executeScript({
//     file: 'api.js'
// });
// chrome.tabs.executeScript({
//     file: 'popup.js'
// });
//
// chrome.browserAction.onClicked.addListener(function (tab){
//     function buttonClicked(tab) {
//         console.log('tassssb', tab)
//     }
// })



// chrome.tabs.executeScript( null, {code:"var x = 10; x"},
//     function(results){ console.log(results); } );
//
//
// chrome.extension.getBackgroundPage().console.log('foo');

//
// function createTab (url) {
//     return new Promise(resolve => {
//         chrome.tabs.create({url}, async tab => {
//         chrome.tabs.onUpdated.addListener(function listener (tabId, info) {
//             if (info.status === 'complete' && tabId === tab.id) {
//                 chrome.tabs.onUpdated.removeListener(listener);
//                 resolve(tab);
//             }
//         });
//     });
// });
// }