#!/usr/bin/env python3

import shutil
from pathlib import Path

source_dir = Path('/mnt/chromeos/MyFiles/Downloads')
oed_dev = Path('/home/takayukitatsuoki/oed-dev')
public = oed_dev / 'public'
res = public / 'res'
for file in source_dir.iterdir():
    if file.is_file():
        dest = public / file.name
        if file.suffix == '.md':
            dest = res / file.name
        if dest.exists():
            dest.unlink()
        shutil.move(str(file), str(dest))
        print(dest.name)
