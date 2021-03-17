#!/bin/bash

GREEN="\033[0;32m"
OFF="\033[0m"

SERVER="acsu.cornell.edu"
SERVER_PATH="/var/www/acsu"

echo Enter your NetID, you will be asked for your Cornell password:

read NETID

jekyll build

printf "Deploying to ${GREEN}${SERVER}${SERVER_PATH}${OFF}\n"

rsync -rvz _site/ $NETID@$SERVER:$SERVER_PATH
