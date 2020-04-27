#!bin/bash

git fetch origin
git reset --hard origin/master
cd app
chmod +x start.sh
bash start.sh
