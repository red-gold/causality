version=$1
echo $version
for entry in `ls packages`; do
    echo $entry
    cd packages/$entry
    pwd
    yarn info --json | grep latest
    yarn publish --new-version $version
    cd ../../ 
done