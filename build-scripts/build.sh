for entry in `ls packages`; do
    echo $entry
    cd packages/$entry
    pwd
    yarn build:dev
    cd ../../ 
done