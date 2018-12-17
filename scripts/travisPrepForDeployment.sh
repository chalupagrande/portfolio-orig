#!/bin/bash
## RUN FROM ROOT
echo '********* Running Prep Script *********'
sed -i 's/public/build/' ./server/server.js

## update package.json
sed -i '/proxy/d' ./package.json

echo '********* Finishing Prep... *********'
