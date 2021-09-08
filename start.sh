#!/bin/sh

MESSAGE=$1
BRANCH=$2

git add .

git commit -m "$MESSAGE"

[ -z "$BRANCH" ] && git push origin main || git push origin $BRANCH 