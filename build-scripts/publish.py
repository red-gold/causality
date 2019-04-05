import json
from shutil import copyfile
import re
import subprocess
import os
import sys
path = os.path.abspath('./packages/')
subPackages = []
for item in os.listdir(path):
    subPackages.append(os.path.join(path, item))
current_path = os.path.abspath('./')

print('run test and build the main package and all subpackages prior to publish, exit if error')

subprocess.check_call(['yarn','test'])
subprocess.check_call(['yarn','build:prod'])
for sp in subPackages:
    #no need for rerun each sub test
    # subprocess.check_call(['yarn','test'], cwd=sp)
    subprocess.check_call(['yarn', 'build:prod'], cwd=sp)


def check_version(new_version, old_version):
    r = re.compile('[0-9]*\.[0-9]*\.[0-9]*')
    assert r.match(new_version) is not None, 'version pattern is not allowed'
    new_count = 0
    for idx, val in enumerate(new_version.split('.')):
        new_count += int(val)*100**(3-idx)
    
    old_count = 0
    for idx, val in enumerate(old_version.split('.')):
        old_count += int(val)*100**(3-idx)

    assert new_count > old_count, 'new version must higher than the old'
copyfile('package.json', 'package.json.backup')

with open('package.json','r') as f:
        package = json.load(f)
workspaces = package['workspaces']
print(workspaces)

current_version = package['version']
print('current version {}'.format(current_version))
new_version = raw_input('new version: ')
check_version(new_version, current_version)

for sp in subPackages:
    print('publish: {} to version {}'.format(sp, new_version))
    try: 
        subprocess.check_call(['yarn', 'publish', '--new-version', '{}'.format(new_version)], cwd=sp)
    except:
        pass #sometime publish yeild error even success
    print('...................')
    print('publish success: {} version {}'.format(sp, new_version))
    print('...................')

print('publish: causalNet')
package['private'] = False
del package['workspaces']
with open('package.json','w') as f:
    json.dump(package, f, indent=4)
try: 
    subprocess.check_call(['yarn', 'publish', '--new-version', '{}'.format(new_version)])
except:
    pass #sometime publish yeild error even success
print('...................')
print('publish success to version {}'.format(new_version))
#restore private
package['private'] = True
package['workspaces'] = workspaces
package['version'] = new_version
with open('package.json','w') as f:
    json.dump(package, f, indent=4)
