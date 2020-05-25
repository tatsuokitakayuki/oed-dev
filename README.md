# OED - Open, Edit, and Download.

## What is this
"OED" is a text / code editor made only by web technology.
"OED" is a progressive web app.
We are developing "OED" mainly for Chromebook (or Chromium OS and its based OS) users.

## Project goals
- Turn "OED" into a fine text / code editor.
    - Add functionality.
        1. Make all Ace features as accessible as possible.
            - This is an important goal for the time being.
        2. Implement the functions that PWA should have.
        3. The functions unique to "OED" are implemented.
    - We will fix the problems that occurred during the development of "OED".
    - Prepare the source code of "OED".

## Features of "OED"
- "OED" is a complete progressive web app (PWA).
    - We are developing without using Chrome API.
    - The usability differs from that of a general text code editor.
        - For example, there is no "Save file". There is a "Download file" instead.
- Caches all files needed to perform an "OED" to local storage.
    - "OED" works offline.
- "OED" is updated automatically in the background.
    - Always keep the latest version.
        - The dev channel is sometimes released with defects.
- We are building an "OED" UI with Material Design.
    - Most web apps preinstalled on Chrome OS use Material Design.
    - We can't come up with a reason to adopt other designs in "OED".
    - And above all, we wanted to build an "OED" UI with material design.
        - We wanted to identify the various issues that arise when building a UI with material design.
- "OED" does not require special permissions.
    - This is to prevent unnecessary access to your browser, OS, and hardware.
- "OED" does not use cookies.
    - Use IndexedDB instead.
- "OED" is open source software.
    - Open source software.

## System requirements
- OS
    - Chrome OS (Main target, Tested)
    - Linux (Reported to work)
    - Windows (Tested)
    - Mac
    - Android (Tested, but unstable)
    - iOS
    - iPadOS
- Browser
    - Chrome (Main target, Tested)
    - Firefox
    - Edge (Tested on EdgeHTML and Chromium)
    - Safari

## List of libraries and frameworks used
* [Ace](https://ace.c9.io/)
* [Material Design Component for Web](https://material.io/develop/web/)
* [Material Design Icons](https://google.github.io/material-design-icons/)
* [localForage](https://localforage.github.io/localForage/)
* [emmet-core](https://github.com/cloud9ide/emmet-core)

## License
This program is open source software; it is distributed under the [MIT License](https://github.com/tatsuokitakayuki/oed-dev/blob/master/LICENSE).

## How to use
### How to try immediately
- [stable channel](https://oed-stable.web.app/)
- [dev channel](https://oed-dev.web.app/)

This app uses [Firebase](https://firebase.google.com/) hosting services.

## Contact information
Tatsuoki, Takayuki
- Feel free to.
