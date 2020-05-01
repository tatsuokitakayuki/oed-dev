#!/usr/bin/env python3

from pathlib import Path

oed = Path('/home/takayukitatsuoki/oed-dev/public')
oed_res = Path('/home/takayukitatsuoki/oed-dev/public/res')
oed_icons = Path('/home/takayukitatsuoki/oed-dev/public/images/icons')
ace = Path('/home/takayukitatsuoki/oed-dev/public/ace')
ace_snippets = Path('/home/takayukitatsuoki/oed-dev/public/ace/snippets')

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
    file.write('\'./' + x + '\',\n')
file.close()

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
    file.write('\'./' + x + '\',\n')
file.close()
