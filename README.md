# OED - Open, edit, and download.

## What is this
"OED" is a text / code editor implemented only in web technology.
"OED" is the Progressive Web Apps (PWA).
We make "OED" mainly for Chromebook (or Chromium OS and OS based) users.

## Goal
- Turn "OED" into a worthy text editor.
    - Add features.
        1. Make all Ace features as accessible as possible.
            - Immediate priority goals.
        2. Implement functions to be provided as PWA.
        3. Implements functions unique to "OED".
    - Correct the bug.
    - Prepare source code.

## Features of "OED"
- A complete progressive web app (PWA). Perhaps.
    - We are not using the Chrome API.
    - Usability differs from a general text editor.
        - For example, there is no "Save file". Instead, there is a "Download file".
- Cache all files needed to run the app in local storage.
    - Works offline. Perhaps.
- Updates automatically in the background.
    - Always keep the latest version.
        - The dev channel sometimes releases with bugs.
- We use material design.
    - Most web apps that come pre-installed with Chrome OS use material design.
    - We have no idea why we can adopt other designs in this app.
    - And above all, we wanted to use material design.
        - You can't measure the good or bad without actually using it.
- No special permissions are required.
    - To prevent unnecessary access to browsers, operating systems, and hardware.
- No cookies.
    - We use IndexedDB instead.
- Open source software.
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

## Open Source Software License
This app is developed using the following libraries and frameworks.

- [Ace](https://ace.c9.io/)
    - [GitHub - ajaxorg/ace-builds: Packaged version of Ace code editor](https://github.com/ajaxorg/ace-builds/)
    - [BSD License](https://github.com/ajaxorg/ace-builds/blob/master/LICENSE)
- [Material Design Component for Web](https://material.io/develop/web/)
    - [GitHub - material-components/material-components-web: Modular and customizable Material Design UI components for the web](https://github.com/material-components/material-components-web)
    - [MIT License](https://github.com/material-components/material-components-web/blob/master/LICENSE)
- [Material Design Icons](https://google.github.io/material-design-icons/)
    - [GitHub - google/material-design-icons: Material Design icons by Google](https://github.com/google/material-design-icons)
    - [Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)
- [localForage](https://localforage.github.io/localForage/)
    - [localForage/localForage: 💾 Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API.](https://github.com/localForage/localForage)
    - [Apache License Version 2.0](https://github.com/localForage/localForage/blob/master/LICENSE)
- [emmet-core](https://github.com/cloud9ide/emmet-core)
    - [GitHub - cloud9ide/emmet-core](https://github.com/cloud9ide/emmet-core)
    - [MIT License](https://github.com/cloud9ide/emmet-core/blob/master/LICENSE)

## Legal notice
Copyright Tatsuoki, Takayuki.
- [GitHub - tatsuokitakayuki/oed-dev: OED - Open, edit, and download.](https://github.com/tatsuokitakayuki/oed-dev)
- [MIT License](https://github.com/tatsuokitakayuki/oed-dev/blob/master/LICENSE)

## How to use
### How to try immediately
- [stable channel](https://oed-stable.web.app/)
- [dev channel](https://oed-dev.web.app/)

This app uses [Firebase](https://firebase.google.com/) hosting services.

## Contact information
Tatsuoki, Takayuki
- Feel free to.
