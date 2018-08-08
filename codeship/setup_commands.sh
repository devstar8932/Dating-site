#!/usr/bin/env bash
# By default we use the Node.js version set in your package.json or the latest
# version from the 0.10 release
#
# You can use nvm to install any Node.js (or io.js) version you require.
# nvm install 4.0
nvm install 0.10
# Install bower
npm install -g bower gulp nodemon
npm install
# Install grunt-cli for running your tests or other tasks
# npm install -g grunt-cli
gulp clean
gulp build-debug
