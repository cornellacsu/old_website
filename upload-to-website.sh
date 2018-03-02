#!/bin/bash

GREEN="\033[0;32m"
OFF="\033[0m"

SERVER="acsu.cornell.edu"
SERVER_PATH="/var/www/html"

jekyll build

printf "Deploying to ${GREEN}${SERVER}${SERVER_PATH}${OFF}\n"

rsync -rvz _site/ webmaster@$SERVER:$SERVER_PATH
