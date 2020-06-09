set -e

npm run build

cd dist

echo 'joebocock.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:JoeBocock/joebocock.github.io.git master
cd -
