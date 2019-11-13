apk add --update nodejs npm
npm config set unsafe-perm true
npm install -g yarn
yarn install --pure-lockfile
apk add build-base
yarn start
sysctl fs.inotify.max_user_watches=1048576
make run
