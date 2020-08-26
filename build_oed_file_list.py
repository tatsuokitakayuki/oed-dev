#!/usr/bin/env python3

from pathlib import Path

oed = Path('/home/takayukitatsuoki/oed-dev/public')
oed_res = oed / 'res'
oed_icons = oed / 'images/icons'
ace = oed / 'ace'
ace_snippets = ace / 'snippets'

items = []
for x in oed.iterdir():
    if x.is_file():
        items.append('' + x.name)
for x in oed_res.iterdir():
    if x.is_file():
        items.append('res/' + x.name)
for x in oed_icons.iterdir():
    if x.is_file():
        items.append('images/icons/' + x.name)
items.sort()
file = open('./oed_list.txt', 'w');
for x in items:
    file.write('\'/' + x + '\',\n')
file.close()
