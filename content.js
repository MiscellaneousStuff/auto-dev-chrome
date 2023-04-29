document.addEventListener('click', async function(event) {
    // event.preventDefault();
    console.log(window.location.toString(), "id:", event.target.id);
    console.log(window.location.toString(), "txt:", event.target.textContent.trim());
    console.log(window.location.toString(), "class:", event.target.className);
    console.log(window.location.toString(), "name:", event.target.name);
    console.log(window.location.toString(), "alt:", event.target.name);
    console.log("---");

    const data = {
      "event":  "click",
      "id":     event.target.id,
      "txt":    event.target.textContent.trim(),
      "class":  event.target.className,
      "name":   event.target.name,
      "alt":    event.target.alt,
      "tag":    event.target.tagName
    };
    console.log(data);

    const response = await new Promise(resolve => {
      chrome.runtime.sendMessage({
        info: data,
      }, resolve)
    });
    console.log(response);
});