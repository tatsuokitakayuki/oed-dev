#!/usr/bin/env python3

import shutil
from pathlib import Path

p = Path('/mnt/chromeos/MyFiles/Downloads')
js = Path('/home/takayukitatsuoki/oed-dev/public')
res = Path('/home/takayukitatsuoki/oed-dev/public/res')
for x in p.iterdir():
    if x.is_file():
        y = Path(str(js) + '/' + x.name)
        if x.suffix == '.md':
            y = Path(str(res) + '/' + x.name)
        if y.exists():
            y.unlink()
        shutil.move(str(x), str(y))
