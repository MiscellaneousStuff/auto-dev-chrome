chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("hi")
  if (request.type != "record_data") {
    if (request.info) {
      fetch(request.checkIfUrlExists, { method: "HEAD", body: request.info })
        .then(res => res.json())
        .then(data => sendResponse({res: data}))
        .catch(err => sendResponse({res: err}))
    }
    return true;
  } else {
    console.log("bg received action")
  }
});

// sendResponse({ status: response.ok })