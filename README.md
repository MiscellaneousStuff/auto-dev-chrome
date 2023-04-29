# AutoDev: Chrome Extension

## About

AutoDev: Chrome Extension

## Files

- background.js (events in extensions background page, e.g. listeners for events, handle messaging between content scripts and popup windows, other long running processes)
- content_script.js (exxecutes in URLs matched by manifest file, can wildcard to match all)
- popup.js (handle events in popup window)
- options.js (handle events in options page)
- util.js (multi script funcs)

## TODO

- [x] Record User Actions
   - [x] Clicks
   - [x] Key Presses
- [ ] Record User Voice