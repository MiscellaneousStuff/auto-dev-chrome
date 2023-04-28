chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.info) {
      fetch(request.checkIfUrlExists, { method: "HEAD", body: request.info })
        .then(res => res.json())
        .then(data => sendResponse({res: data}))
        .catch(err => sendResponse({res: err}))
    }
    return true
})

// sendResponse({ status: response.ok })