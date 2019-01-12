for entry in "../packages"/*
do
    echo "$entry"
    ln -rsf ../.eslintrc $entry/.eslintrc
    ln -rsf ../.babelrc $entry/.babelrc
done