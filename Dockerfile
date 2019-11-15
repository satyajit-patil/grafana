FROM golang:1.12.7-alpine3.9

RUN apk add vim git bash

# Set WORKDIR to /application which is the root of all our apps then COPY
# only requirements.txt to avoid screwing up Docker caching and causing a
# full reinstall of all dependencies when dependencies are not changed.

WORKDIR /go

# COPY the app code and configuration into place, then perform any final
# configuration steps.
RUN mkdir /go/grafana
COPY grafana /go/grafana

# COPY the entrypoint script and make it runnable.

RUN apk add --update nodejs npm
RUN npm config set unsafe-perm true
RUN npm install -g yarn
RUN cd /go/grafana; yarn install --pure-lockfile
RUN apk add build-base
