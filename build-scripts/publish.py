import json
from shutil import copyfile
import re
import subprocess
import os

path = os.path.abspath('./packages/')
subPackages = []
for item in os.listdir(path):
    subPackages.append(os.path.join(path, item))
current_path = os.path.abspath('./')
for sp in subPackages:
    subprocess.check_call(['yarn','build:prod'], cwd=sp)
exit()

def check_version(new_version, old_version):
    r = re.compile('[0-9]*\.[0-9]*\.[0-9]*')
    assert r.match(new_version) is not None, 'version pattern is not allowed'
    new_count = 0
    for idx, val in enumerate(new_version.split('.')):
        new_count += int(val)*10**(3-idx)
    
    old_count = 0
    for idx, val in enumerate(old_version.split('.')):
        old_count += int(val)*10**(3-idx)

    assert new_count > old_count, 'new version must higher than the old'
copyfile('package.json', 'package.json.backup')
with open('package.json','r') as f:
    package = json.load(f)

del package['private']
del package['workspaces']
current_version = package['version']
print('current version {}'.format(current_version))
new_version = raw_input('new version: ')
check_version(new_version, current_version)
package['version'] =  new_version

with open('package.json','w') as f:
    json.dump(package, f, indent=4)

# copyfile('package.json.backup', 'package.json')