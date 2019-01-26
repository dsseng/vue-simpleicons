#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# deploy to gh-pages branch
git push -f https://github.com/sh7dm/vue-simpleicons master:gh-pages

cd -
