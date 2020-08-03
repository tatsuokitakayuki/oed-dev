# OED (Open, Edit, and Download)

[Japanese version](https://github.com/tatsuokitakayuki/oed-dev/blob/master/README-JP.md)

## What is this

"OED" is a text / code editor made only by web technology.
"OED" is a progressive web app.
We are developing "OED" mainly for Chromebook (or Chromium OS and its based OS) users.

## Project goals

- Make "OED" a practical text code editor.
    - Add functionality.
    - Fix the defect.
    - Maintain.

## Features of "OED"

- It is a progressive web app.
    - We are developing so that it does not depend on a specific OS or browser.
- Works offline.
    - We are developing so that it does not depend on a specific hosting service.
    - It can be installed locally.
- Updates automatically in the background.
    - Always keep the latest version.
- Does not require special permissions.
    - This is to prevent unnecessary access to your browser, OS, and hardware.
- Do not use cookies.
    - Use IndexedDB instead.
- Open source software.
    - Open source software.

## Disadvantages of "OED"

- There is no Save file.
    - We have prepared a Download file instead.

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
    - This app uses [Firebase](https://firebase.google.com/) hosting services.

### How to try locally

1. Clone this repository.
    - git clone https://github.com/tatsuokitakayuki/oed-dev.git
2. Change to the public directory.
    - cd oed-dev/public/
3. Start the HTTP server.
    - python3 -m http.server --bind 127.0.0.1 8080
4. Open localhost:8080 in your web browser.

Please try.

## Contact information

* 龍興 尚幸 (Tatsuoki, Takayuki): Project leader
    - Twitter: @ttatsuoki
    - e-mail: takayuki.tatsuoki@gmail.com

Feel free to.
