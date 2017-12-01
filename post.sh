#!/bin/sh

git add -A

msg="Update at `date` via post.sh"
git commit -am "$msg"
