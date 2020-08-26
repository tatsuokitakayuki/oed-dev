#!/usr/bin/env python3

from pathlib import Path

oed = Path('/home/takayukitatsuoki/oed-dev/public')
oed_res = oed / 'res'
oed_icons = oed / 'images/icons'
ace = oed / 'ace'
ace_snippets = ace / 'snippets'

items = []
for x in ace.iterdir():
    if x.is_file():
        items.append('ace/' + x.name)
for x in ace_snippets.iterdir():
    if x.is_file():
        items.append('ace/snippets/' + x.name)
items.sort()
file = open('./ace_list.txt', 'w');
for x in items:
    file.write('\'/' + x + '\',\n')
file.close()
