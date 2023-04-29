let myHistory = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("myHistory:", myHistory)
  history.pushState(request.data);

  // Retrieve data
  chrome.storage.local.get(['history'], function(result) {
    const newHistory = request.data + [...result];
    // Save data
    chrome.storage.local.set({history: newHistory}, function() {
      
    });
  });
  fetch("http://localhost:5000/api/events", { method: "POST", body: request.data })
    .then(res => console.log(res))
    .then(data => sendResponse({res: data}))
    .catch(err => sendResponse({res: "err"}))
  return true;
});