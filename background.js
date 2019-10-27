// background script for rideOs extension

chrome.runtime.onInstalled.addListener(function() {
    //this is maybe where I want to store our map data
   chrome.storage.sync.set({color: '#3aa757'}, function() {
     console.log("here");
   });
 });
