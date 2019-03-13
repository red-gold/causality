yarn build:doc
cp -a doc_dist/* ../causality-docs/
cd ../causality-docs/|git status|git add .|git commit -m 'update doc'|git pull origin master|git push origin master 
