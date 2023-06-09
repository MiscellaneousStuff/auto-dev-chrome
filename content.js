let startRecording = performance.now();
let recording = true;

const capture = async (ev_title, event) => {
  const data = {
    "event":  ev_title,
    "id":     event.target.id,
    "txt":    event.target.textContent.trim(),
    "class":  event.target.className,
    "name":   event.target.name,
    "alt":    event.target.alt,
    "tag":    event.target.tagName,
    "key":    (event.key) ? event.key : null,
    "url":    window.location.href,
    "time":   (performance.now() - startRecording) / 1000
  };
  myHistory.push(data);
  console.log(myHistory);

  const response = await new Promise(resolve => {
    chrome.runtime.sendMessage({
      info: data,
    }, resolve)
  });
  console.log("post send")
  console.log("da res:", response);
};

const events = ["click", "keyup", "load"];
events.forEach(event => document.addEventListener(event, (ev) => capture(event, ev)));

/*
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'startRecording') {
    const audioChunks = [];

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        // store audio data in audioChunks array
        mediaRecorder.addEventListener('dataavailable', event => {
          audioChunks.push(event.data);
        });

        // stop recording and save audio file when user clicks stop button
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
          if (message.type === 'stopRecording') {
            mediaRecorder.stop();
            stream.getTracks().forEach(track => track.stop());

            // combine audio chunks into a single audio blob
            const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });

            // create a download link for the audio file
            const downloadUrl = URL.createObjectURL(audioBlob);
            chrome.downloads.download({
              url: downloadUrl,
              filename: 'recording.mp3'
            });

            sendResponse({ type: 'recordingSaved' });
          }
        });
      });
  }
});
*/