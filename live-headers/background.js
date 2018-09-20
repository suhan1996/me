// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.debugger.attach({tabId:tab.id}, version,
//       onAttach.bind(null, tab.id));
// });
//
// var version = "1.0";
//
// function onAttach(tabId) {
//   if (chrome.runtime.lastError) {
//     alert(chrome.runtime.lastError.message);
//     return;
//   }
//
//   chrome.windows.create(
//       {url: "headers.html?" + tabId, type: "popup", width: 800, height: 600});
// }

setInterval(function () {
    //alert("what");
    var doc = {
        data: Date.now()
    }

    $.ajax({
        //LQhi2n6DVD-gMbFM_4u1-ipfhbZZEqAx
        url: "https://api.mongolab.com/api/1/databases/time/collections/time?apiKey=KD1Ze8lriyElaVZNrfmIMwXwicLRCcUr",
        type: "POST",
        data: JSON.stringify(doc),
        //data: object,
        contentType: "application/json"
    }).done(function( msg ) {
        console.log(msg);
        alert("what");

    });
},1000)