


// Copyright (c) 2012,2013 Peter Coles - http://mrcoles.com/ - All rights reserved.
// Use of this source code is governed by the MIT License found in LICENSE


//
// State fields
//

var currentTab, // result of chrome.tabs.query of current active tab
    resultWindowId; // window id for putting resulting images


//
// Utility methods
//

function $(id) { return document.getElementById(id); }
function show(id) { $(id).style.display = 'block'; }
function hide(id) { $(id).style.display = 'none'; }


function getFilename(contentURL) {
    var name = contentURL.split('?')[0].split('#')[0];
    if (name) {
        name = name
            .replace(/^https?:\/\//, '')
            .replace(/[^A-z0-9]+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^[_\-]+/, '')
            .replace(/[_\-]+$/, '');
        name = '-' + name;
    } else {
        name = '';
    }
    return 'screencapture' + name + '-' + Date.now() + '.png';
}


//
// Capture Handlers
//


function displayCaptures(filenames) {
    if (!filenames || !filenames.length) {
        show('uh-oh');
        return;
    }

    _displayCapture(filenames);
}


function _displayCapture(filenames, index) {
    index = index || 0;

    var filename = filenames[index];
    var last = index === filenames.length - 1;

    if (currentTab.incognito && index === 0) {
        // cannot access file system in incognito, so open in non-incognito
        // window and add any additional tabs to that window.
        //
        // we have to be careful with focused too, because that will close
        // the popup.


        console.log('filename is ',
            filename
        )

        // chrome.windows.create({
        //     url: filename,
        //     incognito: false,
        //     focused: last
        // }, function(win) {
        //     console.log('win.id', win.id)
        //     resultWindowId = win.id;
        // });


    } else {


        // chrome.tabs.create({
        //     url: filename,
        //     active: last,
        //     windowId: resultWindowId,
        //     openerTabId: currentTab.id,
        //     index: (currentTab.incognito ? 0 : currentTab.index) + 1 + index
        // });



    }

    if (!last) {
        _displayCapture(filenames, index + 1);
    }
}


function errorHandler(reason) {
    show('uh-oh'); // TODO - extra uh-oh info?
}


function progress(complete) {
    if (complete === 0) {
        // Page capture has just been initiated.
        show('loading');
    }
    else {
        $('bar').style.width = parseInt(complete * 100, 10) + '%';
    }
}


function splitnotifier() {
    show('split-image');
}


//
// start doing stuff immediately! - including error cases
//



    // //


chrome.tabs.getAllInWindow(null, function(tabs){

    console.log('tabs', tabs)

    for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.sendRequest(tabs[i].id, { action: "xxx" });
    }
    var tab = tabs[1];


});
function makeXhrRequest(method, url, token) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
   // xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.onload = function(){
        if (xhr.status >= 200 && xhr.status < 300){
            return resolve(xhr.response);
        } else {
            reject(Error({
                status: xhr.status,
                statusTextInElse: xhr.statusText
            }))
        }
    }
    xhr.onerror = function(){
        reject(Error({
            status: xhr.status,
            statusText: xhr.statusText
        }))
    }
    xhr.send()
})
}
function checkingNext(){
    chrome.tabs.getSelected(null, function(tab){
        console.log(tab);


        // makeXhrRequest('GET', requestUrl, token)
        //     .then((data) => {
        //         let parsedData = JSON.parse(data)
        //         console.log('parsedData', parsedData)
        //     })


        // chrome.tabs.update(tab.id, {url: "http://www.google.com/", active: true}, function(tab1) {
        //
        //     // add listener so callback executes only if page loaded. otherwise calls instantly
        //     var listener = function(tabId, changeInfo, tab) {
        //
        //         if (tab.id == tab1.id && changeInfo.status === 'complete') {
        //             // remove listener, so only run once
        //
        //             // var tab = tabs[0];
        //             currentTab = tab1; // used in later calls to get tab info
        //
        //             var filename = getFilename(tab1.url);
        //             // alert('Hello world!')
        //             CaptureAPI.captureToFiles(tab1, filename, displayCaptures,
        //                 errorHandler, progress, splitnotifier);
        //
        //             chrome.tabs.onUpdated.removeListener(listener);
        //             // do stuff
        //         }
        //     }
        //     chrome.tabs.onUpdated.addListener(listener);
        // });
    });
}

function  setup(){
        let bgpage = chrome.extension.getBackgroundPage();
        let word = '2222';

        let url = 'http://localhost:8090/api/getNextPage';


        loadJSON(url,gotData);


        function gotData(data){
            createP(data.name);

            chrome.tabs.getSelected(null, function(tab){
                console.log(tab);


                chrome.tabs.update(tab.id, {url: data.urls, active: true}, function(tab1) {

                    // add listener so callback executes only if page loaded. otherwise calls instantly
                    var listener = function(tabId, changeInfo, tab) {

                        if (tab.id == tab1.id && changeInfo.status === 'complete') {
                            // remove listener, so only run once

                            // var tab = tabs[0];
                            currentTab = tab1; // used in later calls to get tab info

                            var filename = getFilename(tab1.url);
                            // alert('Hello world!')
                            CaptureAPI.captureToFiles(tab1, filename, displayCaptures,
                                errorHandler, progress, splitnotifier);

                            chrome.tabs.onUpdated.removeListener(listener);
                            // do stuff
                        }
                    }
                    chrome.tabs.onUpdated.addListener(listener);
                });
            });


            // chrome.tabs.update({
            //     url:
            // }, function(tab) {
            //
            //     console.log('get tab', tab)
            //
            //
            //
            //
            //         // var tab = tabs[0];
            //         currentTab = tab; // used in later calls to get tab info
            //
            //         var filename = getFilename(tab.url);
            //         // alert('Hello world!')
            //         CaptureAPI.captureToFiles(tab, filename, displayCaptures,
            //                                   errorHandler, progress, splitnotifier);
            //
            // })









        }





}