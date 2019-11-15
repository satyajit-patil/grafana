apk add --update nodejs npm
npm config set unsafe-perm true
npm install -g yarn
cd ./grafana
yarn install --pure-lockfile
apk add build-base
sysctl fs.inotify.max_user_watches=1048576
