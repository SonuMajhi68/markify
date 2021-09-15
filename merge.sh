#!/bin/sh

CURRENT_BRANCH=$1
MERGE_BRANCH=$2

git checkout $CURRENT_BRANCH

git merge $MERGE_BRANCH

git branch -d $MERGE_BRANCH

git push origin --delete MERGE_BRANCH

git fetch -p